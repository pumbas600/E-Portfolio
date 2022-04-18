import React from "react";
import '../../Styles/App.scss'
import ExternalLink from "./ExternalLink";
import {renderBadges} from "../Utils/ProjectUtils";

interface Props {
    wip?: boolean;
    name: string;
    description: string | JSX.Element;
    date: string;
    githubUrl: string;
    technologies: string[];
}

const ProjectCard: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col justify-between bg-gradient-to-r rounded-lg from-gray-700 to-slate-600 py-3 px-5">
            <div>
                <div className="flex flex-row justify-between items-baseline">
                    <div className="flex flex-row">
                        <ExternalLink
                            animate
                            textColour="text-teal-200"
                            bgColour="bg-teal-200"
                            height="h-1"
                            className="font-semi-bold text-2xl"
                            href={props.githubUrl}
                        >
                            <i className="fab fa-github text-xl mr-1"/>
                            {props.name}
                        </ExternalLink>
                        {props.wip && <div className="ml-0.5 text-xs text-teal-200 font-medium">
                            WIP*
                        </div>}
                    </div>
                    <div className="text-md text-teal-200">
                        {props.date}
                    </div>
                </div>
                <p className="text-gray-300 my-3">
                    {props.description}
                </p>
            </div>
            <div className="mt-2 flex flex-row flex-wrap">
                {renderBadges(props.technologies)}
            </div>
        </div>
    );
}

export default ProjectCard;