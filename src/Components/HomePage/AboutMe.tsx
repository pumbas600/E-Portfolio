import React from "react";
import TechnologyGroup from "../Utils/TechnologyGroup";
import InlineLink from "../Utils/InlineLink";
import Title from "../Utils/Title";
import IconLink from "../Utils/IconLink";
import selfie from '../../Assets/Selfie.jpg';
import Link from "../Utils/Link";

const AboutMe:React.FC = () => {

    const today = new Date();

    function calculateAge(): number {
        // Modified from: https://stackoverflow.com/questions/8152426/how-can-i-calculate-the-number-of-years-between-two-dates
        const birthday = new Date("25 June 2002");
        const ageDiffMs = today.getTime() - birthday.getTime();
        const ageDate = new Date(ageDiffMs);
        return ageDate.getFullYear() - 1970; // Subtract year of Unix Epoch
    }

    function isBirthday(): boolean {
        return today.getMonth() === 5 && today.getDay() === 25;
    }

    return (
        <div id="about-me" className="md:pt-5 dark:text-gray-200 text-gray-800">
            <div className="h-screen flex flex-col justify-center">
                <div className="flex md:flex-row flex-col justify-center mb-32">
                    <img className="w-[16rem] rounded-full" src={selfie} alt="Josh Jeffers"/>
                    <div className="ml-5 flex justify-center flex-col">
                        <div className="font-bold text-8xl">Josh Jeffers</div>
                        <div className="font-semibold text-2xl">Fullstack Software Engineering Student</div>
                        <div className="mt-1 flex flex-row text-2xl">
                            <IconLink href="https://github.com/pumbas600">
                                <i className="mr-5 fab fa-github"/>
                            </IconLink>
                            <IconLink href="https://www.linkedin.com/in/josh-jeffers-657111233/">
                                <i className="mr-5 fab fa-linkedin"></i>
                            </IconLink>
                            <IconLink internal href="mailto:joshjeffers600@gmail.com">
                                <i className="mr-5 far fa-envelope"/>
                            </IconLink>
                        </div>
                    </div>
                </div>
                <div className="mb-16">
                    <div className="md:mx-8 mx-5 md:text-xl text-lg dark:text-gray-200 text-gray-800">
                        <div className="md:text-2xl text-xl font-semibold">Hey there!</div>
                        <br/>
                        <div>
                            I'm Josh, a {calculateAge()} year old Software Engineering Student at the University of Auckland. I
                            have a deep passion for software development, which has driven me to start and complete numerous
                            self-derived projects, in an attempt to expand my programming expertise. I particularly love it when
                            I'm able to develop software that helps others. It is one of the many reasons why I'm so proud of my
                            discord <InlineLink internal href="#quiz-bot">Quiz Bot</InlineLink> which was widely used by Part I
                            Engineering Students.
                        </div>
                        {isBirthday() && <div className="mt-3">
                            🎉 It's actually my <b>birthday today</b>, I expect some Birthday wishes! 🎉
                        </div>}
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link internal href="#technical-skills" className="text-6xl">
                        <i className="fas fa-angle-double-down"/>
                    </Link>
                </div>
            </div>
            <div>
                <Title name="Technical Skills" className="pt-10" />
                <TechnologyGroup
                    title="Frontend"
                    technologies={['tailwindcss', 'typescript', 'jquery', 'react', 'thymeleaf', 'javascript', 'scss']}
                />
                <TechnologyGroup
                    title="Backend"
                    technologies={['java', 'gradle', 'sqlite', 'spring boot', 'mongodb', 'derby']}
                />
                <TechnologyGroup
                    title="Other"
                    technologies={['python', 'c', 'c#', 'git', 'unity']}
                />
            </div>
        </div>
    )    
}

export default AboutMe;