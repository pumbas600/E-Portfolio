import React from "react";
import {renderTechnologies} from "./ProjectUtils";

interface IProps {
    title: string;
    proficientTechnologies: string[];
    familiarTechnologies: string[];
}

const TechnologyGroup:React.FC<IProps> = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <table>
                {props.proficientTechnologies && props.proficientTechnologies.length !== 0 &&
                    <tr className="flex items-center mb-0">
                        <td><h5
                            className="text-right w-24 py-2 pr-2 mr-2 border-solid border-r-2 border-white">Proficient</h5>
                        </td>
                        <td className="flex flex-row items-center">{renderTechnologies(props.proficientTechnologies)}</td>
                    </tr>
                }
                {props.familiarTechnologies && props.familiarTechnologies.length !== 0 &&
                    <tr className="flex items-center mt-0">
                        <td><h5
                            className="text-right w-24 py-2 pr-2 mr-2 border-solid border-r-2 border-white">Familiar</h5>
                        </td>
                        <td className="flex flex-row">{renderTechnologies(props.familiarTechnologies)}</td>
                    </tr>
                }
            </table>
        </div>
    );
}

export default TechnologyGroup;