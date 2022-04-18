import React from "react";
import ProjectCard from "./ProjectCard";
import InlineLink from "../Utils/InlineLink";
import Title from "../Utils/Title";

const ProjectHighlights:React.FC = () => {
    return (
        <div>
            <Title>Projects</Title>
            <div className="grid mt-5 lg:grid-cols-2 grid-cols-1 md:gap-8 gap-5 pb-5">
                <ProjectCard
                    name = "Halpbot"
                    description={<>
                        Halpbot is a comprehensive <InlineLink href="https://github.com/DV8FromTheWorld/JDA">JDA</InlineLink>
                        &nbsp;utility framework that provides a unique, annotation based approach to handling actions when
                        creating discord bots in Java. It's key purpose is to alleviate as much unnecessary boilerplate
                        code while simultaneously being both intuitive and customisable.
                    </>}
                    date = "March 2021"
                    githubUrl="https://github.com/pumbas600/Halpbot"
                    technologies={['java', 'gradle']}
                />
                <ProjectCard
                    wip
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
                    name="Quiz Bot"
                    description={<div>
                        A discord bot I made using Halpbot, my custom discord bot framework for JDA. It allowed users to
                        quiz themselves on CHEMMAT&nbsp;121; a part 1 engineering course. The bot included a vast
                        range of questions, answer streaks, leaderboards and helpful explanations. It also consisted of a
                        a separate&nbsp;<InlineLink href="https://github.com/pumbas600/HalpbotDashboard">dashboard</InlineLink>
                        &nbsp;built using Spring Boot MVC and Thymeleaf which allowed users to easily add questions to the database.
                        From feedback gained by my peers, users found the bot to be an extremely useful and accessible
                        studying mechanism.
                        <br/><br/>
                        As of November 2021, there were:
                        <ul>
                            <li className="ml-3"><b>131</b> unique questions</li>
                            <li className="ml-3"><b>115</b> unique users</li>
                            <li className="ml-3"><b>1,256</b> quizzes started</li>
                            <li className="ml-3"><b>5,088</b> questions answered</li>
                        </ul>
                    </div>}
                    date="September 2021"
                    githubUrl="https://github.com/pumbas600/Halpbot"
                    technologies={['java', 'spring boot', 'thymeleaf', 'javascript', 'jquery', 'derby']}
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
        </div>
    );
} 

export default ProjectHighlights;