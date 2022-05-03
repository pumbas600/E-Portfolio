import React from "react";
import '../../Styles/App.scss'
import Link from "../Utils/Link";
import {generateId, renderBadges} from "../Utils/ProjectUtils";
import Card from "../Utils/Card";

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
        <Card className="flex flex-col" id={generateId(props.name)}>
            <div>
                <div className="flex flex-row justify-between items-baseline dark:text-teal-200 text-sky-600">
                    <div className="flex flex-row">
                        <Link
                            animate
                            bgColour="bg-teal-200"
                            height="h-1"
                            className="font-semi-bold text-2xl"
                            href={props.githubUrl}
                        >
                            <i className="fab fa-github text-xl mr-1"/>
                            {props.name}
                        </Link>
                        {props.wip && <div className="ml-0.5 text-xs font-medium">
                            WIP*
                        </div>}
                    </div>
                    <div className="text-md">
                        {props.date}
                    </div>
                </div>
                <div className="md:leading-[1.4rem] dark:text-gray-300 text-gray-800 md:my-4 my-3 md:text-base text-sm">
                    {props.description}
                </div>
            </div>
            <div className="flex flex-row justify-end flex-wrap-reverse">
                {renderBadges(props.technologies, 'mr-1.5 mt-1.5')}
            </div>
        </Card>
    );
}

export default ProjectCard;