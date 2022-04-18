import ExternalLink from "./ExternalLink";
import React from "react";

interface Props {
    href: string;
    className?: string;
}

const InlineExternalLink: React.FC<Props> = (props) => {
    return <ExternalLink
        animate
        href={props.href}
        textColour="text-sky-300"
        bgColour="bg-sky-300"
        className={props.className}
    >
        {props.children}
    </ExternalLink>
}

export default InlineExternalLink;