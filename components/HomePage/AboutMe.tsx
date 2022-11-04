import React from "react";
import InlineLink from "../Utils/InlineLink";
import Link from "../Utils/Link";
import Overview from "./Overview";

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
        <div id="about-me">
            <div className="min-h-screen flex flex-col justify-evenly">
                <Overview/>
                <div className="mb-5">
                    <div className="md:mx-8 mx-2 dark:text-gray-200 text-gray-800">
                        <div className="items-baseline md:text-2xl text-xl font-semibold">
                            <span className="inline-block peer">Hello there!</span>
                            <span className="ml-3 md:peer-hover:inline-block hidden text-base">
                                <em className="text-sm mr-1">*In the distance*</em> General Kenobi!
                            </span>
                        </div>
                        <br/>
                        <div className="md:text-xl text-base">
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
                <div className="2xl:block hidden mx-auto animate-bounce-slow">
                    <Link internal href="#technical-skills" className="text-6xl">
                        <i className="fas fa-angle-double-down"/>
                    </Link>
                </div>
            </div>
        </div>
    )    
}

export default AboutMe;