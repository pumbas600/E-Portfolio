import React from "react";
import TechnologyGroup from "../Utils/TechnologyGroup";
import InlineLink from "../Utils/InlineLink";
import {renderBadges} from "../Utils/ProjectUtils";

const AboutMe:React.FC = () => {

    const today = new Date();

    function calculateAge(): number {
        // Modified from: https://stackoverflow.com/questions/8152426/how-can-i-calculate-the-number-of-years-between-two-dates
        const birthday = new Date("25 June 2002");
        const ageDiffMs = today.getTime() - birthday.getTime();
        const ageDate = new Date(ageDiffMs);
        return ageDate.getFullYear() - 1970;
    }

    function isBirthday(): boolean {
        return today.getMonth() === 5 && today.getDay() === 25;
    }

    return (
        <div className="md:text-lg text-base text-gray-200">
            <div>
                {`Hey there, I'm Josh, a ${calculateAge()} year old Software Engineer at the University of Auckland. I
                have a passion for programming which has 
                driven me to complete numerous self-driven projects in an attempt to expand my programming knowledge.
                I love when I develop software that manages to help others in some form, which is one of the reasons I'm
                so proud of my discord`} <InlineLink internal href="#quiz-bot">Quiz Bot</InlineLink>.
            </div>
            {isBirthday() && <div className="mt-3">
                🎉 It's actually my <b>birthday today</b>, I expect some Birthday wishes! 🎉
            </div>}
            <div className="text-2xl mt-3 font-bold">Technical Skills</div>

            <TechnologyGroup
                title="Frontend"
                technologies={['tailwindcss', 'typescript', 'jquery', 'react', 'thymeleaf', 'javascript', 'scss']}
            />
            <TechnologyGroup
                title="Backend"
                technologies={['java', 'gradle', 'sqlite', 'spring boot', 'mongodb', 'derby']}
            />
            <TechnologyGroup
                title="other"
                technologies={['python', 'c', 'c#', 'git', 'unity']}
            />
        </div>
    )    
}

export default AboutMe;