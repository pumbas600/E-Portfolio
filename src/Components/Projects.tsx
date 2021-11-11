import React, {useEffect, useState} from "react";
import Project from "./Project";
import {getGitProjects, GitProject} from "./GithubIntegration";

export interface IJsonProject {
    name: string,
    date: string,
    link: string,
    description: string,
    languages: string[]
}

export interface TechnologyIcons {
    [key: string]: string;
}

export const technologyIcons: TechnologyIcons = require('../Assets/TechnologyIcons.json');
//const JsonProjects: IJsonProject[] = require('../Assets/Projects.json');

const Projects:React.FC = () => {

    const [gitProjects, setGitProjects] = useState<GitProject[]>([]);

    useEffect(() => {
        if(gitProjects.length === 0)
            getProjects();
    }, [gitProjects.length])

    const getProjects = async (): Promise<void> => {
        setGitProjects(await getGitProjects());
    }

    const renderProjects = (): JSX.Element[] => {
        let index: number = 0;
        return gitProjects.map((project: GitProject): JSX.Element => {
            return (
                <Project key={project.name} project={project} isLeft={index++ % 2 === 0}/>
            );
        });

    }

    return (
        <section id="projects" className="centred-body">
            <h1>Projects</h1>
            {renderProjects()}
        </section>
    )
} 

export default Projects;