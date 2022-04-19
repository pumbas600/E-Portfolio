import React from "react";
import TechnologyGroup from "../Utils/TechnologyGroup";
import InlineLink from "../Utils/InlineLink";
import Title from "../Utils/Title";

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
        <div id="about-me" className="md:pt-5 md:text-lg text-base text-gray-200">
            <div>
                <div className="md:text-xl text-lg font-semibold">Hey there!</div>
                <br/>
                I'm Josh, a {calculateAge()} year old Software Engineering Student at the University of Auckland. I
                have a deep passion for software development, which has driven me to start and complete numerous
                self-derived projects, in an attempt to expand my programming expertise. I particularly love it when
                I'm able to develop software that helps others. It is one of the many reasons why I'm so proud of my
                discord <InlineLink internal href="#quiz-bot">Quiz Bot</InlineLink> which was widely used by part 1
                Engineering Students.
            </div>
            {isBirthday() && <div className="mt-3">
                🎉 It's actually my <b>birthday today</b>, I expect some Birthday wishes! 🎉
            </div>}
            <Title name="Technical Skills"/>
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
    )    
}

export default AboutMe;