export interface GitProject {
    name: string;
    link: string;
    description: string;
    technologies: string[];
    created: Date;
}

export interface GitProjects {
    [project: string]: GitProject;
}

export interface GithubContribution {
    date: Date;
    contributions: number;
}

interface RawProject {
    name: string;
    html_url: string;
    description?: string;
    languages_url: string;
    created_at: string;
    fork: boolean;
}

interface RawLanguages {
    [language: string]: number;
}

interface RawContributions {
    contributions: RawContribution[];
}

interface RawContribution {
    week: number;
    days: { count: number }[]
}

interface GitProjectFilters {
    ignoreLanguages?: string[];
    addTechnologies?: string[];
    appendDescription?: string;
}

interface IntegrationFilters {
    ignoreForks: boolean;
    ignoreProjects: string[];
    ignoreLanguages: string[];
    projectFilters: { [project: string]: GitProjectFilters };
}

export const emptyGitProject: GitProject = {
    name: '',
    link: '',
    description: '',
    technologies: [],
    created: new Date()
};

const splitPascalCase: RegExp = new RegExp('([a-z])([A-Z])', 'g');

const integrationFilters: IntegrationFilters = require("../Assets/GitProjectFilters.json");

let gitProjects: GitProjects;
let pinnedRepos: string[];
const contributions: { [year: number]: GithubContribution[] } = {};

function splitPascalCaseText(pascalCase: string): string {
    return pascalCase.replaceAll(splitPascalCase, '$1 $2');
}

function sortProjectsNewestToOldest(projects: GitProject[]): GitProject[] {
    return projects.sort((a: GitProject, b: GitProject): number => {
        return b.created.getTime() - a.created.getTime();
    })
}

async function getTechnologies(project: RawProject, gitProjectFilters?: GitProjectFilters): Promise<string[]> {
    const response: Response = await fetch(project.languages_url);
    if (!response.ok) {
        console.error(`There was an error trying to fetch the languages for ${project.name}`);
        return [];
    }

    const rawLanguages: RawLanguages = await response.json();
    const technologies: string[] = [];
    Object.keys(rawLanguages).forEach((language: string) => {
        if (!integrationFilters.ignoreLanguages.includes(language) &&
            !gitProjectFilters?.ignoreLanguages?.includes(language))
        {
            technologies.push(language.toLowerCase());
        }
    });
    if (gitProjectFilters?.addTechnologies) {
        technologies.push(...gitProjectFilters?.addTechnologies);
    }

    return technologies;
}

async function fetchGitProjects(): Promise<GitProject[]> {
    const response: Response = await fetch('https://api.github.com/users/pumbas600/repos');
    if (!response.ok) {
        console.error('There was an error trying to fetch the projects from the Github API');
        return [];
    }

    const rawProjects: RawProject[] = await response.json();
    return Promise.all(
        rawProjects.filter((project: RawProject): boolean => {
            // Check if this project is meant to be ignored
            return !integrationFilters.ignoreProjects.includes(project.name)
                && (!integrationFilters.ignoreForks || !project.fork);
        })
        .map(async (project: RawProject): Promise<GitProject> => {
            const gitProjectFilters: GitProjectFilters | undefined = integrationFilters.projectFilters[project.name];

            let description: string = project.description ? project.description : '';
            if (gitProjectFilters?.appendDescription)
                description += gitProjectFilters.appendDescription;

            const languages: string[] = await getTechnologies(project, gitProjectFilters)
            return {
                name: splitPascalCaseText(project.name),
                link: project.html_url,
                description: description,
                technologies: languages,
                created: new Date(project.created_at),
            };
        }));
}

function daysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
}

async function fetchContributions(year: number): Promise<GithubContribution[]> {
    try {
        const response: Response = await fetch(`https://skyline.github.com/pumbas600/${year}.json`, { mode: "no-cors" });
        if (!response.ok) {
            console.error(`There was an error trying to fetch the contributions for ${year}`);
            return [];
        }

        const rawContributions: RawContributions = await response.json();
        let currentDay = 1;
        let currentMonth = 0;
        let daysInCurrentMonth = daysInMonth(year, currentMonth);

        const contributions: GithubContribution[] = [];

        rawContributions.contributions.forEach((weeklyContributions: RawContribution): void => {
            weeklyContributions.days.forEach((dailyContributions: { count: number }): void => {
                const githubContribution: GithubContribution = {
                    date: new Date(year, currentMonth, currentDay),
                    contributions: dailyContributions.count
                }

                contributions.push(githubContribution);
                currentDay++;
                if (currentDay > daysInCurrentMonth) {
                    currentDay = 1;
                    currentMonth++;
                    daysInCurrentMonth = daysInMonth(year, currentMonth);
                }
            });
        });
        return contributions;
    } catch (error) {
        console.error(`There was an error trying to fetch the contributions for ${year}`);
        return [];
    }
}

export async function getContributionsBetween(from: Date, to: Date): Promise<GithubContribution[]> {
    const targetContributions: GithubContribution[] = [];

    function addIfBetweenDates(contribution: GithubContribution): void {
        if (contribution.date >= from && contribution.date <= to) {
            targetContributions.push(contribution);
        }
    }
    //TODO: Optimise using index slicing / indexes
    if (contributions[from.getFullYear()] === undefined) {
        contributions[from.getFullYear()] = await fetchContributions(from.getFullYear());
        contributions[from.getFullYear()].forEach(addIfBetweenDates);
    }
    if (from.getFullYear() !== to.getFullYear() && contributions[to.getFullYear()] === undefined) {
        contributions[to.getFullYear()] = await fetchContributions(to.getFullYear());
        contributions[to.getFullYear()].forEach(addIfBetweenDates);
    }

    return targetContributions;
}

async function fetchPinnedRepositories(): Promise<string[]> {
    const response: Response = await fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=pumbas600',
        { mode: "no-cors" });
    if (!response.ok) {
        console.error('There was an error fetching the pinned repositories');
        return [];
    }

    return (await response.json()).map((repository: {repo: string}) => splitPascalCaseText(repository.repo));
}

export async function getGitProjectsList(): Promise<GitProject[]> {
    await getGitProjects();
    return Object.entries(gitProjects)
        .map(([name, gitProject]: [string, GitProject]): GitProject => gitProject);
}

export async function getPinnedRepositories(): Promise<GitProject[]> {
    await getGitProjects();
    if (!pinnedRepos) {
        pinnedRepos = await fetchPinnedRepositories();
    }
    return sortProjectsNewestToOldest(
        pinnedRepos.map((repositoryName: string) => gitProjects[repositoryName]));
}

export async function getGitProjects(): Promise<GitProjects> {
    if (!gitProjects) {
        gitProjects = {};
        sortProjectsNewestToOldest(await fetchGitProjects())
            .forEach((gitProject: GitProject): void => {
                gitProjects[gitProject.name] = gitProject;
            });
    }
    return gitProjects;
}

export function logGitProjects(): void {
    getGitProjectsList().then((gitProjects:GitProject[]): void => {
        console.log("\n\n\nFetched git projects");
        gitProjects.forEach((gitProject: GitProject) => {
            console.log(gitProject);
        });
    });
}