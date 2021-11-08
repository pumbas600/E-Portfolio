export interface GitProject {
    name: string;
    link: string;
    description?: string;
    languages: string[];
    created: Date;
}

interface RawProject {
    name: string;
    html_url: string;
    description?: string;
    languages_url: string;
    created_at: string;
}

interface RawLanguages {
    [language: string]: number;
}

var gitProjects: GitProject[] = [];

async function getLanguages(project: RawProject): Promise<string[]> {
    return fetch(project.languages_url)
        .then((response: Response): Promise<RawLanguages> => {
            return response.json();
        })
        .then((rawLanguages: RawLanguages): string[] => {
            const languages: string[] = [];
            Object.keys(rawLanguages).forEach((language: string) => {
                languages.push(language);
            }); 
            return languages;
        });
}

async function fetchGitProjects(): Promise<GitProject[]> {
    return fetch('https://api.github.com/users/pumbas600/repos')
        .then((response: Response): Promise<RawProject[]> => {
            return response.json();
        })
        .then((rawProjects: RawProject[]): Promise<GitProject[]> => {
            return Promise.all(
                rawProjects.map((project: RawProject): Promise<GitProject> => {
                    return getLanguages(project)
                        .then((languages: string[]): GitProject => {
                            return {
                                name: project.name,
                                link: project.html_url,
                                description: project.description,
                                languages: languages,
                                created: new Date(project.created_at),
                            };
                        });
                }))  
        });
}

export async function getGitProjects(): Promise<GitProject[]> {
    if (gitProjects.length == 0)
        gitProjects = await fetchGitProjects(); 
    return gitProjects;
}       