import React from "react";
import Section from "../Utils/Section";
import TechnologyGroup from "../Utils/TechnologyGroup";

const AboutMe:React.FC = () => {
    return (
        <Section id="about-me" title="About Me">
            <div>
                <p>
                    {`Hey there, I'm Josh, a 19 year old first year engineering student at the University of Auckland 
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
        </Section>
    )    
}

export default AboutMe;