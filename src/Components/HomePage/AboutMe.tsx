import React from "react";
import Section from "../Utils/Section";
import TechnologyGroup from "../Utils/TechnologyGroup";
import GithubContributions from "./GithubContributions";

const AboutMe:React.FC = () => {

    function calculateAge(): number {
        // Modified from: https://stackoverflow.com/questions/8152426/how-can-i-calculate-the-number-of-years-between-two-dates
        const birthday = new Date("25 June 2002");
        const ageDiffMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDiffMs);
        return ageDate.getFullYear() - 1970;
    }

    return (
        <Section id="about-me" title="About Me">
            <div>
                <p>
                    {`Hey there, I'm Josh, a ${calculateAge()} year old first year engineering student at the University of Auckland 
                    intending to specialise in software engineering in 2022. I have a passion for programming which has 
                    driven me to complete numerous self-driven projects in an attempt to expand my programming knowledge.
                    I love when I develop software that helps meet some need, which is one of the reason's why I'm so proud
                    of `} <span className="inline-link horizontal-link-hover-effect"><a href="#Halpbot"> Halpbot</a></span>.
                </p>
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
            <GithubContributions/>
        </Section>
    )    
}

export default AboutMe;