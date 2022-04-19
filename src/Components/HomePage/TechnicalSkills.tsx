import Title from "../Utils/Title";
import TechnologyGroup from "../Utils/TechnologyGroup";
import React from "react";

const TechnicalSkills: React.FC = () => {
    return (
        <div className="mb-8">
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
    );
}

export default TechnicalSkills;