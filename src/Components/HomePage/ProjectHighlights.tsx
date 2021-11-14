import React, {useEffect, useState} from "react";
import Project from "./Project";
import {emptyGitProject, getGitProjects, GitProject, GitProjects} from "../GithubIntegration";
import SectionTitle from "../Utils/SectionTitle";

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

export const technologyIcons: TechnologyIcons = require('../../Assets/TechnologyIcons.json');

const projectHighlights: string[] = ['E-Portfolio', 'Halpbot Dashboard', 'Halpbot'];

const ProjectHighlights:React.FC = () => {

    const [gitProjects, setGitProjects] = useState<GitProject[]>([]);

    useEffect(() => {
        if(gitProjects.length === 0)
            getProjects();
    }, [gitProjects.length])

    const getProjects = async (): Promise<void> => {
        const gitProjects: GitProjects = await getGitProjects();
        if (gitProjects) {
            setGitProjects(projectHighlights
                .map((projectName: string): GitProject => {
                    if (!gitProjects[projectName]) {
                        console.error(`There was an error loading the project ${projectName}`);
                        return { ...emptyGitProject, name: projectName };
                    }
                    else return gitProjects[projectName];
                }));
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
        <section id="projects" className="centred-body flex md:flex-row flex-col justify-between">
            <SectionTitle title={'Project Highlights'} description={'Fetched from GitHub via their REST API'}/>
            <div className="grid grid-cols-1 gap-5">
                {renderProjects()}
            </div>
        </section>
    );
} 

export default ProjectHighlights;