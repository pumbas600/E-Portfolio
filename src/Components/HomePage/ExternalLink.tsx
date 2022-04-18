import React from "react"

interface Props {
    href: string;
    colour: string;
    className?: string;
    animate?: boolean;
    height?: string;
}

const ExternalLink: React.FC<Props> = (props) => {

    function prefixClassesWith(classes: string | undefined, prefix: string): string {
        if (classes === undefined)
            return '';

        return classes.split(' ')
            .map(className => {
                if (className.startsWith('dark:'))
                    return 'dark:' + prefix + className.substring(4);
                return prefix + className;
            })
            .join(' ');
    }

    return (
        <a target="_blank"
           rel="noreferrer"
           href={props.href}
           className={`${props.className ?? ''} ${prefixClassesWith(props.colour, 'text-')} group inline-block relative`}
        >
            <span>{props.children}</span>
            {props.animate &&
                <span className={`
                    block absolute ${props.height ?? "h-0.5"} w-full ${prefixClassesWith(props.colour, 'bg-')}
                    transition-transform ease-in-out scale-x-0 origin-right group-hover:scale-100
                    group-hover:origin-left duration-500`}>
                </span>}
        </a>
    )
}

export default ExternalLink;