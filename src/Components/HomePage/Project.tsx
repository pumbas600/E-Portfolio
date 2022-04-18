import React, { useState } from "react";
import { GitProject } from "../GithubIntegration";
import ExpandButton from "../Utils/ExpandButton";
import {renderBadges} from "../Utils/ProjectUtils";
import {CSSTransition} from "react-transition-group";

interface IProps {
    project: GitProject;
}

const Project:React.FC<IProps> = (props) => {

    const [showTechnologies, setShowTechnologies] = useState(false)

    return (
        <div id={props.project.name} className="filter rounded-xl w-full dark:bg-gray-900 bg-gray-100 pt-4 p-5 drop-shadow-lg">
            <div className="flex items-baseline justify-between pb-2">
                <h3>
                    {props.project.name}
                </h3>
                <p>
                    {props.project.created.toLocaleString('default', { month: 'long', year: 'numeric'}) }
                </p>           
            </div>
            <hr/>
            <div className="flex flex-row justify-between">
                <p className="py-3 md:py-5">
                    {props.project.description ? props.project.description : "This project doesn't have a description."}
                </p>
                <ExpandButton onClick={(isExpanded: boolean): void => setShowTechnologies(isExpanded)}
                    tooltipText={showTechnologies ? 'Hide Technologies' : 'Show Technologies'}/>
            </div>
            <CSSTransition in={showTechnologies} timeout={300} classNames="project" unmountOnExit>
                <div className="flex flex-row flex-wrap ml-2 mb-5 py-1 pl-3 border-purple-500 border-l-4">
                    {renderBadges(props.project.technologies)}
                </div>
            </CSSTransition>
            <div className="flex justify-between">
                <div>
                    <button className="filter drop-shadow-md rounded-md bg-purple-500 p-2 w-24 mr-5 hover:bg-purple-600 transition-colors">
                        <a href="#projects" className="text-white font-semibold">
                            More Info
                        </a>
                    </button>
                    <a target="_blank" rel="noreferrer" href={props.project.link} className="dark:text-white text-purple-500 font-semibold text-base github-link horizontal-link-hover-effect">
                        <i className="fab fa-github mr-2"/>
                        GitHub
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default Project;