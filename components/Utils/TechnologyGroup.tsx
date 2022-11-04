import React from "react";
import {renderBadges} from "./ProjectUtils";

interface IProps {
    title: string;
    technologies: string[];
}

const TechnologyGroup:React.FC<IProps> = (props) => {
    return (
        <div>
            <div className="text-lg font-semibold">{props.title}</div>
            <div className="flex flex-row flex-wrap">
                {renderBadges(props.technologies, 'mr-1.5 mt-1')}
            </div>
        </div>
    );
}

export default TechnologyGroup;