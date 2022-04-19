import React from "react";
import Link from "./Link";

interface Props {
    href: string;
    className?: string;
    internal?: boolean;
}

const IconLink: React.FC<Props> = (props) => {
    return (
        <Link href={props.href}
              className={`${props.className ?? ''} transition-transform duration-200 ease-in-out hover:-translate-y-1`}
              internal={props.internal}
        >
            {props.children}
        </Link>
    );
}

export default IconLink;