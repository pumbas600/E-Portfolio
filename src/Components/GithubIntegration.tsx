export interface GitProject {
    name: string;
    link: string;
    description: string;
    technologies: string[];
    created: Date;
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
    ignoreProjects: string[];
    ignoreLanguages: string[];
    projectFilters: { [project: string]: GitProjectFilters };
}

const splitPascalCase: RegExp = new RegExp('([a-z])([A-Z])', 'g');

const integrationFilters: IntegrationFilters = require("../Assets/GitProjectFilters.json");

let gitProjects: GitProject[] = [];

async function getTechnologies(project: RawProject, gitProjectFilters?: GitProjectFilters): Promise<string[]> {
    return fetch(project.languages_url)
        .then((response: Response): Promise<RawLanguages> => {
            return response.json();
        })
        .then((rawLanguages: RawLanguages): string[] => {
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
        });
}

async function fetchGitProjects(): Promise<GitProject[]> {
    return fetch('https://api.github.com/users/pumbas600/repos')
        .then((response: Response): Promise<RawProject[]> => {
            return response.json();
        })
        .then((rawProjects: RawProject[]): Promise<GitProject[]> => {
            return Promise.all(
                rawProjects.filter((project: RawProject): boolean => {
                    // Make sure the project isn't meant to be ignored
                    return !integrationFilters.ignoreProjects.includes(project.name)
                        && !project.fork;
                })
                .map(async (project: RawProject): Promise<GitProject> => {
                    const gitProjectFilters: GitProjectFilters | undefined = integrationFilters.projectFilters[project.name];

                    let description: string = project.description ? project.description : '';
                    if (gitProjectFilters?.appendDescription)
                        description += gitProjectFilters.appendDescription;

                    return getTechnologies(project, gitProjectFilters)
                        .then((languages: string[]): GitProject => {
                            return {
                                name: project.name.replaceAll(splitPascalCase, '$1 $2'),
                                link: project.html_url,
                                description: description,
                                technologies: languages,
                                created: new Date(project.created_at),
                            };
                        });
                }));
        });
}

export async function getGitProjects(): Promise<GitProject[]> {
    if (gitProjects.length === 0)
        gitProjects = (await fetchGitProjects())
                .sort((a: GitProject, b: GitProject): number => {
                    return b.created.getTime() - a.created.getTime();
                });
    return gitProjects;
}

export function logGitProjects(): void {
    getGitProjects().then((gitProjects:GitProject[]): void => {
        console.log("\n\n\nFetched git projects");
        gitProjects.forEach((gitProject: GitProject) => {
            console.log(gitProject);
        });
    });
}