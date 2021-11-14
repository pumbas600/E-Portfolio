import React, { useState } from "react";
import { technologyIcons } from "./ProjectHighlights";
import { GitProject } from "../GithubIntegration";
import ExpandButton from "../Utils/ExpandButton";

interface IProps {
    project: GitProject;
}

interface IState {
    showTechnologies: boolean;
}

const Project:React.FC<IProps> = (props) => {

    const [state, setState] = useState<IState>( {showTechnologies: false} )

    function renderTechnologies(): JSX.Element[] {
        if (props.project.technologies && props.project.technologies.length !== 0)
            return props.project.technologies.map(technology => {
                return (
                    <img key={technology} src={technologyIcons[technology]} className="my-1 mr-2" alt={technology}/>
                );
            });
        else return (
            [<p className="dark:text-gray-300 text-gray-700 text-base">There are no technologies used for this project yet.</p>]
        );
    }

    return (
        <div id={props.project.name} className="filter rounded-xl w-full dark:bg-gray-900 bg-gray-100 pt-4 p-5 drop-shadow-lg">
            <div className="flex items-baseline justify-between pb-2">
                <h2 className="dark:text-white text-black font-semibold text-xl md:text-2xl">
                    {props.project.name}
                </h2>
                <p className="dark:text-gray-300 text-gray-700 md:text-base text-xs">
                    {props.project.created.toLocaleString('default', { month: 'long', year: 'numeric'}) }
                </p>           
            </div>
            <hr className="dark:border-white border-black"/>
            <div className="flex flex-row justify-between">
                <p className="dark:text-gray-300 text-gray-700 text-sm md:text-base py-3 md:py-5">
                    {props.project.description ? props.project.description : "This project doesn't have a description."}
                </p>
                <ExpandButton onClick={(isExpanded: boolean): void => setState({showTechnologies: isExpanded})}
                    tooltip-text={state.showTechnologies ? 'Hide Technologies' : 'Show Technologies'}/>
                {/*<div className="hidden md:flex items-center tooltip project-tooltip"*/}
                {/*     tooltip-text={}>*/}

                {/*    <button onClick={() => setState({showTechnologies: !state.showTechnologies})}*/}
                {/*            className={`filter drop-shadow-md bg-purple-500 w-9 h-9 flex justify-center items-center*/}
                {/*                        rounded-full hover:bg-purple-600 transform active:rotate-45 transition-all */}
                {/*                        ${state.showTechnologies && 'rotate-45'}`}>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />*/}
                {/*        </svg>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
            {state.showTechnologies &&
                <div className="flex flex-row flex-wrap ml-2 mb-5 py-1 pl-3 border-purple-500 border-l-4">
                    {renderTechnologies()}    
                </div>
            }
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