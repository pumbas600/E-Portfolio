import Link from "./Link";
import React from "react";

interface Props {
    href: string;
    internal?: boolean;
    className?: string;
    theme?: 'light' | 'dark' | 'dynamic'
}

const InlineLink: React.FC<Props> = (props) => {

    let textColour = 'dark:text-sky-300 text-sky-600';
    let bgColour = 'dark:bg-sky-300 bg-sky-600';

    switch (props.theme) {
        case 'light':
            textColour = 'text-sky-600';
            bgColour = 'bg-sky-600';
            break;
        case 'dark':
            textColour = 'text-sky-300';
            bgColour = 'bg-sky-300';
            break;
    }

    return <Link
        animate
        internal={props.internal}
        href={props.href}
        textColour={textColour}
        bgColour={bgColour}
        className={props.className}
    >
        {props.children}
    </Link>
}

export default InlineLink;