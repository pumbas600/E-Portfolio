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
        <div id={props.project.name} className="filter rounded-xl w-full dark:bg-gray-900 bg-gray-100 p-5 drop-shadow-lg">
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
            {state.showTechnologies &&
                <div className="flex flex-row flex-wrap pb-5">
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
                <div className="group flex flex-row items-center">
                    <p className="dark:text-gray-300 text-gray-700 hidden group-hover:block mr-2">
                        {state.showTechnologies ? 'Hide technologies' : 'Show technologies' }
                    </p>
                    <button onClick={() => setState({ showTechnologies: !state.showTechnologies })}
                        className={"filter drop-shadow-md bg-purple-500 w-9 h-9 flex justify-center items-center rounded-full hover:bg-purple-600 transform active:rotate-45 transition-all " + (state.showTechnologies && 'rotate-45')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default Project;