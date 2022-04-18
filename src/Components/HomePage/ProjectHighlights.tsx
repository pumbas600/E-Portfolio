import React from "react";
import ProjectCard from "./ProjectCard";
import ExternalLink from "./ExternalLink";

const ProjectHighlights:React.FC = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 centred-body">
            <ProjectCard
                name = "Halpbot"
                description={<>
                    {`Halpbot is a comprehensive `}
                    <ExternalLink animate textColour="text-sky-300" bgColour="bg-sky-300" href="https://github.com/DV8FromTheWorld/JDA">
                        JDA
                    </ExternalLink>
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
                technologies={['react', 'typescript', 'tailwindcss', 'scss']}
            />
            <ProjectCard
                wip
                name="Deadline API"
                description={`
                    This project consists of both a backend, built using Java, Spring Boot and MongoDB, along with a
                    small supporting frontend built in React and Typescript. This project allows users to manage
                    upcoming university  deadlines. It allows you to specify which courses you want to track and if you
                    want the course to be publicly subscribable, enabling others to add those courses and get their
                    notifications without having to set it up themselves.
                `}
                date="April 2022"
                githubUrl="https://github.com/pumbas600/DeadlineBot"
                technologies={['java', 'spring boot', 'mongodb', 'typescript', 'react']}
            />
        </div>
    );
} 

export default ProjectHighlights;