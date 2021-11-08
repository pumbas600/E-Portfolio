import React from "react";
import { IJsonProject, LanguageIcons } from "./Projects";

interface IProps {
    project: IJsonProject;
    isLeft: boolean;
}

const Project:React.FC<IProps> = (props) => {

    const renderLanguages = (): JSX.Element[] => {
        return props.project.languages.map(language => {
            return (
                <img src={LanguageIcons[language]} className="language-icon" alt={language}/>
            )
        })
    }

    return (
        <div id={props.project.name} className={"content-container " + props.isLeft ? "left" : "right"}>
            <div className="content content-display">
                <div className="content-header">
                    <span className="content-title">{props.project.name}</span>
                    <span className="content-date">{props.project.date}</span>
                </div>
                <hr/>
                <div className="content-description" dangerouslySetInnerHTML={{__html: props.project.description}}>
                </div>
                <div className="content-footer">
                    <div className="content-language">
                        {renderLanguages()}
                    </div>
                    <div className="content-link">
                        <a target="_blank" rel="noreferrer" href="https://github.com/pumbas600/HalpBot" className="github-link horizontal-link-hover-effect">
                            <i className="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;