import React from "react";
import InlineLink from "../Utils/InlineLink";
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
        <div id="about-me" className="md:pt-8 pt-5">
            <div className="min-h-screen flex flex-col justify-evenly">
                <div className="flex md:flex-row flex-col justify-center items-center mb-5">
                    <img className="md:w-[16rem] md:mb-0 mb-2 w-56 rounded-full" src={selfie} alt="Josh Jeffers"/>
                    <div className="md:ml-5 flex justify-center flex-col md:items-start items-center">
                        <div className="font-bold md:text-8xl text-5xl">Josh Jeffers</div>
                        <div className="font-semibold md:text-2xl text-base">Fullstack Software Engineering Student</div>
                        <div className="mt-1 flex flex-row text-2xl md:justify-start justify-center">
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
                <div className="mb-5">
                    <div className="md:mx-8 mx-2 md:text-xl text-base dark:text-gray-200 text-gray-800">
                        <div className="md:text-2xl text-xl font-semibold">Hello there!</div>
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
                <div className="md:block hidden mx-auto animate-bounce-slow">
                    <Link internal href="#technical-skills" className="text-6xl">
                        <i className="fas fa-angle-double-down"/>
                    </Link>
                </div>
            </div>
        </div>
    )    
}

export default AboutMe;