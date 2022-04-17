import React from "react"

interface Props {
    href: string;
    className?: string;
}

const ExternalLink: React.FC<Props> = (props) => {
    return (
        <a target="_blank"
           rel="noreferrer"
           href={props.href}
           className={props.className}
        >
            {props.children}
        </a>
    )
}

export default ExternalLink;