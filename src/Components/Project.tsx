import React, { useState } from "react";
import { technologyIcons } from "./Projects";
import { GitProject } from "./GithubIntegration";

interface IProps {
    project: GitProject;
}

interface IState {
    showTechnologies: boolean;
}

const Project:React.FC<IProps> = (props) => {

    const [state, setState] = useState<IState>( {showTechnologies: false} )

    const renderTechnologies = (): JSX.Element[] => {
        return props.project.technologies.map(technology => {
            return (
                <img key={technology} src={technologyIcons[technology]} className="language-icon" alt={technology}/>
            );
        });
    }

    return (
        <div id={props.project.name} className="rounded-xl w-full dark:bg-gray-900 bg-gray-100 p-5 drop-shadow-lg">
            <div className="flex items-baseline justify-between pb-2">
                <h2 className="dark:text-white text-black font-semibold text-2xl">
                    {props.project.name}
                </h2>
                <p className="dark:text-gray-300 text-gray-700 md:text-base text-sm">
                    {props.project.created.toLocaleString('default', { month: 'long', year: 'numeric'}) }
                </p>           
            </div>
            <hr className="dark:border-white border-black"/>
            <p className="dark:text-gray-300 text-gray-700 text-base py-5">
                {props.project.description}
            </p>
            <div className="flex justify-between">
                <div>
                    <button className="drop-shadow-md rounded-md bg-purple-500 p-2 w-24 mr-5 hover:bg-purple-600">
                        <a className="text-white font-semibold">
                            More Info
                        </a>
                    </button>
                    <a target="_blank" rel="noreferrer" href={props.project.link} className="dark:text-white text-purple-500 font-semibold text-base github-link horizontal-link-hover-effect">
                        <i className="fab fa-github mr-2"/>
                        GitHub
                    </a>
                </div>
                <div className="group flex flex-row items-center">
                    <p className="dark:text-gray-300 text-gray-700 hidden group-hover:block mr-2">
                        {state.showTechnologies ? 'Hide technologies' : 'Show technologies' }
                    </p>
                    <button onClick={() => setState({ showTechnologies: !state.showTechnologies })}
                        className={"drop-shadow-md bg-purple-500 w-9 h-9 flex justify-center items-center rounded-full hover:bg-purple-600 transform active:rotate-45 transition-transform " + (state.showTechnologies && 'rotate-45')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
            </div> 
            {state.showTechnologies &&
                <div className="flex flex-row flex-wrap pt-5">
                    {renderTechnologies()}    
                </div>
            }
        </div>
    )
}

export default Project;

/*
<div id={props.project.name} className="content-container">
            <div className="content">
                <div className="content-display">
                    <div className="content-header">
                        <span className="content-title">{props.project.name}</span>
                        <span className="content-date">
                            <span className="content-month">
                                {props.project.created.toLocaleString('default', { month: 'long'})}
                            </span>
                            <span className="content-year">{props.project.created.getFullYear()}</span>
                        </span>
                    </div>
                    <hr/>
                    <div className="content-description" dangerouslySetInnerHTML={{__html: props.project.description}}>
                    </div>
                    <div className="content-footer">
                        <div className="content-language">
                            {renderLanguages()}
                        </div>
                        <div className="content-link">
                            <a target="_blank" rel="noreferrer" href={props.project.link} className="github-link horizontal-link-hover-effect">
                                <i className="fab fa-github"/>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-sidebar"/>
        </div>
 */