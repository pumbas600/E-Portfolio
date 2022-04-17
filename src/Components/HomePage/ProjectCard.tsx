import React from "react";
import '../../Styles/App.scss'
import ExternalLink from "./ExternalLink";

interface Props {
    name: string;
    description: string | JSX.Element;
    date: string;
    githubUrl: string;
    technologies: string[];
}

const ProjectCard: React.FC<Props> = (props) => {
    return (
        <div className="bg-gradient-to-r rounded-lg from-gray-700 to-slate-600 w-1/3 py-3 px-5 m-5">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between items-baseline">
                    <ExternalLink
                        className="font-semi-bold text-2xl text-teal-200 github-link horizontal-link-hover-effect project-title-link"
                        href={props.githubUrl}
                    >
                        {props.name}
                    </ExternalLink>
                    <div className="text-md text-teal-200">
                        {props.date}
                    </div>
                </div>
                <p className="text-gray-300 my-2">
                    {props.description}
                </p>
                <div className="flex flex-row">
                    <ExternalLink href={props.githubUrl} className="text-xl text-teal-200 hover:text-teal-100">
                        <i className="fab fa-github"/>
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;