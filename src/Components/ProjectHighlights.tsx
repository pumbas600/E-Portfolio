import React, {useEffect, useState} from "react";
import Project from "./Project";
import {getGitProjectsList, GitProject} from "./GithubIntegration";
import SectionTitle from "./SectionTitle";

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

const ProjectHighlights:React.FC = () => {

    const [gitProjects, setGitProjects] = useState<GitProject[]>([]);

    useEffect(() => {
        if(gitProjects.length === 0)
            getProjects();
    }, [gitProjects.length])

    const getProjects = async (): Promise<void> => {
        const gitProjects: GitProject[] = await getGitProjectsList();
        if (gitProjects) {
            setGitProjects(gitProjects);
        }
        else {
            console.error('There was an error fetching the projects!')
        }
    }

    const renderProjects = (): JSX.Element[] => {
        return gitProjects.map((project: GitProject): JSX.Element => {
            return (
                <Project key={project.name} project={project}/>
            );
        });

    }

    return (
        <section id="projects" className="centred-body">
            <SectionTitle title={'Project Highlights'} description={'Fetched from GitHub via their REST API'}/>
            <div className="section-content grid grid-cols-1 gap-5">
                {renderProjects()}
            </div>
        </section>
    );
} 

export default ProjectHighlights;