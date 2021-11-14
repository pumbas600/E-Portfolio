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

const splitPascalCase: RegExp = new RegExp('([a-z])([A-Z])', 'g');

const integrationFilters: IntegrationFilters = require("../Assets/GitProjectFilters.json");

let gitProjects: GitProjects;

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
                name: project.name.replaceAll(splitPascalCase, '$1 $2'),
                link: project.html_url,
                description: description,
                technologies: languages,
                created: new Date(project.created_at),
            };
        }));
}

export async function getGitProjects(): Promise<GitProject[]> {
    if (!gitProjects) {
        gitProjects = {};
        (await fetchGitProjects())
            .sort((a: GitProject, b: GitProject): number => {
                return b.created.getTime() - a.created.getTime();
            })
            .forEach((gitProject: GitProject): void => {
                gitProjects[gitProject.name] = gitProject;
            });
    }
    return Object.entries(gitProjects)
        .map(([name, gitProject]: [string, GitProject]): GitProject => gitProject);
}

export function logGitProjects(): void {
    getGitProjects().then((gitProjects:GitProject[]): void => {
        console.log("\n\n\nFetched git projects");
        gitProjects.forEach((gitProject: GitProject) => {
            console.log(gitProject);
        });
    });
}