import React from "react";
import {renderTechnologies} from "./ProjectUtils";

interface IProps {
    title: string;
    proficientTechnologies: string[];
    familiarTechnologies: string[];
}

const TechnologyGroup:React.FC<IProps> = (props) => {
    return (
        <div className="my-2">
            <h4>{props.title}</h4>
            {props.proficientTechnologies && props.proficientTechnologies.length !== 0 &&
                <div className="flex md:flex-row flex-col">
                    <p className="italic md:text-right md:w-24 w-full mr-2">Proficient</p>
                    <div className="flex flex-row flex-wrap">
                        {renderTechnologies(props.proficientTechnologies)}
                    </div>
                </div>
            }
            {props.familiarTechnologies && props.familiarTechnologies.length !== 0 &&
                <div className="flex md:flex-row flex-col">
                    <p className="italic md:text-right md:w-24 w-full mr-2">Familiar</p>
                    <div className="flex flex-row flex-wrap ">
                        {renderTechnologies(props.familiarTechnologies)}
                    </div>
                </div>
            }
        </div>
    );
}

export default TechnologyGroup;