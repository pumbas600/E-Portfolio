import {technologyIcons} from "../HomePage/ProjectHighlights";
import React from "react";

export function renderTechnologies(technologies: string[]): JSX.Element[] {
    if (technologies && technologies.length !== 0)
        return technologies.map((technology: string): JSX.Element => {
            return (
                <img key={technology} src={technologyIcons[technology]} className="h-28 my-1 mr-2" alt={technology}/>
        );
        });
    else return (
        [<p>There are no technologies used for this project yet.</p>]
    );
}
