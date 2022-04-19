import React from 'react';
import Link from "../Utils/Link";
import {generateId} from "../Utils/ProjectUtils";

interface Props {
    toggleTheme: () => void;
}

const Header:React.FC<Props> = (props) => {

    function renderLinks(links: string[]) {
        return links.map(link => {
            return (
                <Link
                    animate
                    internal
                    textColour="text-gray-200 dark:text-gray-800"
                    bgColour="bg-gray-200 dark:bg-gray-800"
                    href={`#${generateId(link)}`}
                    className="inline-block ml-5"
                    height="h-1"
                >
                    {link}
                </Link>
            );
        });
    }

    return (
        <nav className="fixed top-0 w-full bg-teal-200 py-2">
            <div className="flex flex-row justify-end centred-body items-center text-xl font-bold">
                <i onClick={() => props.toggleTheme()} className="ml-5 text-gray-200 dark:text-gray-800 fas fa-adjust"/>
                {renderLinks(['About Me', 'Technical Skills', 'Projects', 'Contact Me'])}
            </div>
        </nav>
    )
}

export default Header