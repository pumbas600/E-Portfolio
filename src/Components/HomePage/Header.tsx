import React from 'react';
import Link from "../Utils/Link";
import {generateId} from "../Utils/ProjectUtils";

interface Props {
    toggleTheme: () => void;
    currentTheme: string;
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
        <nav className="w-full dark:bg-teal-200 bg-gray-800 md:py-3 py-2">
            <div className="flex flex-row justify-between centred-body items-center text-xl font-bold">
                <div onClick={() => props.toggleTheme()} className="ml-5 text-gray-200 dark:text-gray-800">
                    {props.currentTheme === 'dark' ? <i className="fas fa-sun"/> : <i className="fas fa-moon"/>}
                </div>
                <div className="md:flex hidden flex-row">
                    {renderLinks()}
                </div>
                <div className="md:hidden">

                </div>
            </div>
        </nav>
    )
}

export default Header