import React from "react";
import TechnologyGroup from "../Utils/TechnologyGroup";
import InlineLink from "../Utils/InlineLink";

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
        <div className="text-lg text-gray-200">
            <div>
                {`Hey there, I'm Josh, a ${calculateAge()} year old Software Engineer at the University of Auckland. I
                have a passion for programming which has 
                driven me to complete numerous self-driven projects in an attempt to expand my programming knowledge.
                I love when I develop software that manages to help others in some form, which is one of the reasons I'm
                so proud of my`} <InlineLink href="#quiz-bot">Quiz Bot</InlineLink>.
            </div>
            {isBirthday() && <div className="mt-3">
                🎉 It's actually my <b>birthday today</b>, I expect some Birthday wishes! 🎉
            </div>}
            <h3 className="my-3">Technical Skills</h3>
            <TechnologyGroup
                title="Web Development"
                proficientTechnologies={['html', 'css', 'scss', 'tailwindcss', 'jquery']}
                familiarTechnologies={['spring boot', 'thymeleaf', 'javascript', 'typescript', 'react', 'npm']}
            />
            <TechnologyGroup
                title="Object Oriented Programming"
                proficientTechnologies={['java', 'c#', 'gradle']}
                familiarTechnologies={['python', 'kotlin', 'javafx']}
            />
            <TechnologyGroup
                title="Databases"
                proficientTechnologies={['derby']}
                familiarTechnologies={['sqlite']}
            />
            <TechnologyGroup
                title="Other"
                proficientTechnologies={['c', 'git']}
                familiarTechnologies={['unity']}
            />
        </div>
    )    
}

export default AboutMe;