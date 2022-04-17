import React from "react";
import ProjectCard from "./ProjectCard";
import ExternalLink from "./ExternalLink";

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
    return (
        <div className="flex flex-row">
            <ProjectCard
                name = "Halpbot"
                description={<>
                    {`Halpbot is a comprehensive `}
                    <span className="inline-link horizontal-link-hover-effect">
                        <ExternalLink href="https://github.com/DV8FromTheWorld/JDA">JDA</ExternalLink>
                    </span>
                    {` utility framework that provides a unique, annotation based approach to handling actions when
                    creating discord bots in Java. It's key purpose is to alleviate as much unnecessary boilerplate
                    code while simultaneously being both intuitive and customisable.`}
                </>}
                date = "March 2021"
                githubUrl="https://github.com/pumbas600/Halpbot"
                technologies={['java', 'gradle']}
            />
            <ProjectCard
                name = "Portfolio"
                description={`
                    This digital portfolio was created as a way for me to develop my front-end knowledge using modern
                    functional React components, Typescript and Tailwindcss. 
                `}
                date = "November 2021"
                githubUrl="https://github.com/pumbas600/E-Portfolio"
                technologies={['react', 'typescript', 'tailwindcss']}
            />
            <ProjectCard
                name="Deadline API"
                description={`
                    This project consists of both a backend, built using Java, Spring Boot and MongoDB, along with a
                    small supporting frontend built in React and Typescript is used to manage users upcoming university
                    deadlines. It allows you to specify which courses you want to track and if you want the course to
                    be publicly subscribable, allowing others to get notifications about those events without having to
                    set it up themselves.
                `}
                date="March 2022"
                githubUrl="https://github.com/pumbas600/DeadlineBot"
                technologies={['java', 'spring boot', 'mongodb', 'typescript', 'react']}
            />
        </div>
    );
} 

export default ProjectHighlights;