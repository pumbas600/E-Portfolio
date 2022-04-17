import React from "react";

interface Props {
    name: string;
    description: string;
    githubUrl: string;
    technologies: string[];
}

const ProjectCard: React.FC<Props> = (props) => {
    return (
        <div className="rounded-md bg-gray-600 w-1/3  p-3">
            <div className="flex flex-col">
                <div className="text-2xl text-blue-300">
                    {props.name}
                </div>
                <p className="text-gray-400">
                    {props.description}
                </p>
                <div className="flex flex-row">
                    <a target="_blank" rel="noreferrer" href={props.githubUrl}>
                        <i className="fab fa-github"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;