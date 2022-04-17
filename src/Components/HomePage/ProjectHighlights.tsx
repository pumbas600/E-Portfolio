import React, {useEffect, useState} from "react";
import Project from "./Project";
import { getPinnedRepositories, GitProject } from "../GithubIntegration";
import Section from "../Utils/Section";
import ProjectCard from "./ProjectCard";

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
    }, []);

    const getProjects = async (): Promise<void> => {
        const gitProjects: GitProject[] = await getPinnedRepositories();
        setGitProjects(gitProjects);
    }

    const renderProjects = (): JSX.Element[] => {
        return gitProjects.map((project: GitProject): JSX.Element => {
            return (
                <Project key={project.name} project={project}/>
            );
        });
    }

    return (
        <div>
            <ProjectCard
                name = "Halpbot"
                description="Desc"
                githubUrl="https://github.com/pumbas600/Halpbot"
                technologies={[]}
            />
            <Section id={'projects'} title={'Project Highlights'} description={'Fetched from GitHub via their REST API'}>
                {renderProjects()}
            </Section>
        </div>
    );
} 

export default ProjectHighlights;