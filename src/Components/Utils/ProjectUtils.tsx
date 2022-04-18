import React from "react";
import Badge from "./Badge";

export function renderBadges(names: string[], classNames?: string): JSX.Element[] {
    if (names && names.length !== 0)
        return names.map(name => {
            return <Badge key={name} className={classNames} name={name}/>;
        });
    else return (
        [<p>There are no technologies used for this project yet.</p>]
    );
}

export function generateId(name: string): string {
    return name.replaceAll(' ', '-').toLowerCase();
}
