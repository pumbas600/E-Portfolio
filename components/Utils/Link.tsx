import React from "react"
import LinkBase, { LinkBaseProps } from "./LinkBase";

interface Props extends LinkBaseProps {
    textColour?: string;
    bgColour?: string;
    height?: string;
}

const Link: React.FC<Props> = (props) => {
    return (
        <LinkBase href={props.href}
                  internal={props.internal}
           className={`${props.className ?? ''} ${props.textColour ?? ''} group relative`}
        >
            <span>{props.children}</span>
            <span className={`
                block absolute ${props.height ?? "h-0.5"} w-full ${props.bgColour ?? ''}
                transition-transform ease-in-out scale-x-0 origin-right group-hover:scale-100
                group-hover:origin-left duration-500 opacity-95`}
            />
        </LinkBase>
    )
}

export default Link;