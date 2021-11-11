import React from "react";
import { technologyIcons } from "./Projects";
import { GitProject } from "./GithubIntegration";

interface IProps {
    project: GitProject;
    isLeft: boolean;
}

const Project:React.FC<IProps> = (props) => {

    const renderLanguages = (): JSX.Element[] => {
        return props.project.technologies.map(technology => {
            return (
                <img key={technology} src={technologyIcons[technology]} className="language-icon" alt={technology}/>
            );
        });
    }

    return (
        <div id={props.project.name} className={"content-container " + (props.isLeft ? "left" : "right")}>
            <div className="content content-display">
                <div className="content-header">
                    <span className="content-title">{props.project.name}</span>
                    <span className="content-date">{props.project.created.getFullYear()}</span>
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
    )
}

export default Project;