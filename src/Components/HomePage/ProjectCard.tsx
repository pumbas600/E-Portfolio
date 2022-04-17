import React from "react";
import '../../Styles/App.scss'

interface Props {
    name: string;
    description: string | JSX.Element;
    date: string;
    githubUrl: string;
    technologies: string[];
}

const ProjectCard: React.FC<Props> = (props) => {
    return (
        <div className="rounded-lg bg-gray-700 w-1/3 py-3 px-5 m-5">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between items-baseline">
                    <div className="font-semi-bold text-2xl text-teal-200">
                        {props.name}
                    </div>
                    <div className="text-md text-teal-200">
                        {props.date}
                    </div>
                </div>
                <p className="text-gray-300 my-2">
                    {props.description}
                </p>
                <div className="flex flex-row">
                    <a target="_blank"
                       rel="noreferrer"
                       href={props.githubUrl}
                       className="text-xl text-teal-200 hover:text-teal-100"
                    >
                        <i className="fab fa-github"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;