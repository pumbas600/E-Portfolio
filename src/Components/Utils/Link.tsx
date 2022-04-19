import React from "react"

interface Props {
    href: string;
    textColour?: string;
    internal?: boolean;
    bgColour?: string;
    className?: string;
    animate?: boolean;
    height?: string;
}

const Link: React.FC<Props> = (props) => {
    return (
        <a target={props.internal ? undefined : '_blank'}
           rel="noreferrer"
           href={props.href}
           className={`${props.className ?? ''} ${props.textColour ?? ''} group inline-block relative`}
        >
            <span>{props.children}</span>
            {props.animate &&
                <span className={`
                    block absolute ${props.height ?? "h-0.5"} w-full ${props.bgColour ?? ''}
                    transition-transform ease-in-out scale-x-0 origin-right group-hover:scale-100
                    group-hover:origin-left duration-500 opacity-95`}>
                </span>}
        </a>
    )
}

export default Link;