import Title from "../Utils/Title";
import TechnologyGroup from "../Utils/TechnologyGroup";
import React from "react";

const TechnicalSkills: React.FC = () => {
    return (
        <div className="mb-8">
            <Title name="Technical Skills"/>
            <div className="md:ml-8 ml-5 flex flex-col gap-y-3 mt-2">
                <TechnologyGroup
                    title="Frontend"
                    technologies={['tailwindcss', 'typescript', 'jquery', 'react', 'thymeleaf', 'javascript', 'scss']}
                />
                <TechnologyGroup
                    title="Backend"
                    technologies={['java', 'gradle', 'sqlite', 'spring boot', 'mongodb', 'derby']}
                />
                <TechnologyGroup
                    title="Other*"
                    technologies={['python', 'c', 'c#', 'git', 'unity']}
                />
                <em className="text-base">
                    *Although some of these languages can be used for backend, I have not used them in such a manner.
                </em>
            </div>
        </div>
    );
}

export default TechnicalSkills;