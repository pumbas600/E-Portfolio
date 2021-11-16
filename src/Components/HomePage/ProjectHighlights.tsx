import React, {useEffect, useState} from "react";
import Project from "./Project";
import { getPinnedRepositories, GitProject } from "../GithubIntegration";
import Section from "../Utils/Section";

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

const ProjectHighlights:React.FC = () => {

    const [gitProjects, setGitProjects] = useState<GitProject[]>([]);

    useEffect(() => {
        getProjects();
    }, [])

    const getProjects = async (): Promise<void> => {
        const gitProjects: GitProject[] = await getPinnedRepositories();
        if (gitProjects.length !== 0) {
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
        <Section id={'projects'} title={'Project Highlights'} description={'Fetched from GitHub via their REST API'}>
            {renderProjects()}
        </Section>
    );
} 

export default ProjectHighlights;