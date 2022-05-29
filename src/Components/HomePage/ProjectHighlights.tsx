import React from "react";
import ProjectCard from "./ProjectCard";
import InlineLink from "../Utils/InlineLink";
import Title from "../Utils/Title";

const ProjectHighlights:React.FC = () => {
    return (
        <div>
            <Title name="Projects"/>
            <div className="grid mt-5 lg:grid-cols-2 grid-cols-1 md:gap-8 gap-5 pb-5">
                <ProjectCard
                    name = "Halpbot"
                    description={<>
                        Halpbot is a comprehensive <InlineLink href="https://github.com/DV8FromTheWorld/JDA">JDA
                        </InlineLink> utility framework that provides a unique, annotation based approach to handling
                        interactions when creating discord bots in Java. Its key purpose is to alleviate as much
                        unnecessary boilerplate code while simultaneously being both intuitive and highly customisable.
                    </>}
                    date = "March 2021"
                    githubUrl="https://github.com/pumbas600/Halpbot"
                    technologies={['gradle', 'hartshorn', 'java']}
                />
                <ProjectCard
                    name = "Portfolio"
                    description={`
                        This digital portfolio was created as a way for me to develop my frontend knowledge by designing
                        highly reusable React components in Typescript. Tailwindcss was used for the styling, allowing
                        me to easily make the website support devices of various sizes and dark/light modes. 
                    `}
                    date = "November 2021"
                    githubUrl="https://github.com/pumbas600/E-Portfolio"
                    technologies={['react', 'typescript', 'tailwindcss']}
                />
                <ProjectCard
                    name="Quiz Bot"
                    description={<div>
                        A discord bot I made using <InlineLink internal href={'#halpbot'}>Halpbot</InlineLink>, my
                        custom discord bot framework for JDA. The bot allowed users to quiz themselves on
                        CHEMMAT&nbsp;121; a Part I Engineering course. The bot included a vast range of questions,
                        answer streaks, leaderboards and helpful explanations. It also consisted of a
                        separate <InlineLink href="https://github.com/pumbas600/HalpbotDashboard">dashboard</InlineLink> built
                        using Spring Boot and Thymeleaf which allowed users to easily add questions to the database.
                        According to feedback collected from my peers, users found the bot to be an extremely useful
                        and accessible studying mechanism.
                        <br/><br/>
                        As of November 2021, there were:
                        <ul className="list-disc">
                            <li className="ml-5"><b>131</b> unique questions</li>
                            <li className="ml-5"><b>115</b> unique users</li>
                            <li className="ml-5"><b>1,256</b> quizzes started</li>
                            <li className="ml-5"><b>5,088</b> questions answered</li>
                        </ul>
                    </div>}
                    date="September 2021"
                    githubUrl="https://github.com/pumbas600/Halpbot"
                    technologies={['jquery', 'thymeleaf', 'spring boot', 'javascript', 'java', 'derby']}
                />
                <ProjectCard
                    wip
                    name="Deadline API"
                    description={<>
                        This project consists of both a backend&nbsp;— built using Java, Spring Boot and MongoDB&nbsp;— along
                        with a small supporting frontend built in React and Typescript. This project allows users to manage
                        upcoming university  deadlines. It allows you to specify which courses you want to track and if you
                        want the course to be publicly subscribable, enabling others to add those courses and get their
                        notifications without having to set it up themselves.
                    </>}
                    date="April 2022"
                    githubUrl="https://github.com/pumbas600/DeadlineBot"
                    technologies={['react', 'typescript', 'mongodb', 'spring boot', 'java']}
                />
            </div>
        </div>
    );
} 

export default ProjectHighlights;