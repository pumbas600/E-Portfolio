import React from 'react';
import Link from "../Utils/Link";
import {generateId} from "../Utils/ProjectUtils";

interface Props {
    toggleTheme: () => void;
    sections: string[];
}

const Header:React.FC<Props> = (props) => {

    function renderLinks() {
        return props.sections.map(link => {
            const id = generateId(link);
            return (
                <Link
                    key={id}
                    animate
                    internal
                    textColour="text-gray-200 dark:text-gray-800"
                    bgColour="bg-gray-200 dark:bg-gray-800"
                    href={`#${id}`}
                    className="inline-block ml-5"
                    height="h-1"
                >
                    {link}
                </Link>
            );
        });
    }

    return (
        <nav className="md:block hidden w-full dark:bg-teal-200 bg-sky-600 py-3">
            <div className="flex flex-row justify-between centred-body items-center text-xl font-bold">
                <i onClick={() => props.toggleTheme()} className="ml-5 text-gray-200 dark:text-gray-800 fas fa-adjust"/>
                <div className="flex flex-row">
                    {renderLinks()}
                </div>
            </div>
        </nav>
    )
}

export default Header