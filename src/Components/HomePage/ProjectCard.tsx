import React from "react";
import '../../Styles/App.scss'
import Link from "../Utils/Link";
import {generateId, renderBadges} from "../Utils/ProjectUtils";

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
        <div className="flex flex-col justify-between bg-gradient-to-r rounded-lg from-gray-700 to-slate-600 md:py-5 py-3 md:px-8 px-5"
             id={generateId(props.name)}
        >
            <div>
                <div className="flex flex-row justify-between items-baseline">
                    <div className="flex flex-row">
                        <Link
                            animate
                            textColour="text-teal-200"
                            bgColour="bg-teal-200"
                            height="h-1"
                            className="font-semi-bold text-2xl"
                            href={props.githubUrl}
                        >
                            <i className="fab fa-github text-xl mr-1"/>
                            {props.name}
                        </Link>
                        {props.wip && <div className="ml-0.5 text-xs text-teal-200 font-medium">
                            WIP*
                        </div>}
                    </div>
                    <div className="text-md text-teal-200">
                        {props.date}
                    </div>
                </div>
                <div className="md:leading-[1.4rem] text-gray-300 md:my-4 my-3 md:text-base text-sm">
                    {props.description}
                </div>
            </div>
            <div className="flex flex-row justify-end flex-wrap-reverse">
                {renderBadges(props.technologies, 'mr-1.5 mt-1.5')}
            </div>
        </div>
    );
}

export default ProjectCard;