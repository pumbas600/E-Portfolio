import React from "react";

interface Props {
    name: string;
    className?: string;
}

const BadgeUrls: { [name: string]: string | undefined } = require('../../Assets/TechnologyIcons.json')


const Badge: React.FC<Props> = (props) => {

    function fallbackUrl(): string {
        return `https://img.shields.io/badge/${props.name}-lightgrey?style=for-the-badge`;
    }

    return (
        <img alt={props.name} src={BadgeUrls[props.name] ?? fallbackUrl()} className={props.className}/>
    )
}

export default Badge;