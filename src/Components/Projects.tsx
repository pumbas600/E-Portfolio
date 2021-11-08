import React from "react";
import Project from "./Project";

export interface IJsonProject {
    name: string,
    date: string,
    link: string,
    description: string,
    languages: string[]
}

export interface ILanguageIcons {
    [key: string]: string;
}

export const LanguageIcons: ILanguageIcons = require('../Assets/LanguageIcons.json');
const JsonProjects: IJsonProject[] = require('../Assets/Projects.json');

const Projects:React.FC = () => {

    const renderProjects = (): JSX.Element[] => {
        var index: number = 0;
        return JsonProjects.map(project => {
            return(
                <Project project={project} isLeft={index++ % 2 === 0}/>
            )
        })
    }

    return (
        <section id="projects" className="centred-body">
            <h1>Projects</h1>
            {renderProjects()}
        </section>
    )
} 

export default Projects;