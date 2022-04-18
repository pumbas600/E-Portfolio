import React from "react";
import Badge from "../HomePage/Badge";

export function renderBadges(names: string[]): JSX.Element[] {
    if (names && names.length !== 0)
        return names.map(name => {
            return <Badge key={name} name={name}/>;
        });
    else return (
        [<p>There are no technologies used for this project yet.</p>]
    );
}
