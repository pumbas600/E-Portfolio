import Link from "./Link";
import React from "react";

interface Props {
    href: string;
    internal?: boolean;
    className?: string;
}

const InlineLink: React.FC<Props> = (props) => {
    return <Link
        animate
        internal={props.internal}
        href={props.href}
        textColour="text-sky-300"
        bgColour="bg-sky-300"
        className={props.className}
    >
        {props.children}
    </Link>
}

export default InlineLink;