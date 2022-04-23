import React from 'react';
import Link from "../Utils/Link";

interface Props {
    toggleTheme: () => void;
    currentTheme: string;
    sections: [string, string][];
}

const Header:React.FC<Props> = (props) => {

    function renderLinks() {
        return props.sections.map(section => {
            const [name, link] = section;
            return (
                <Link
                    key={name}
                    animate
                    internal
                    textColour="text-gray-200 dark:text-gray-800"
                    bgColour="bg-gray-200 dark:bg-gray-800"
                    href={`#${link}`}
                    className="inline-block ml-5"
                    height="h-1"
                >
                    {name}
                </Link>
            );
        });
    }

    return (
        <nav className="w-full dark:bg-teal-200 bg-gray-800 md:py-3 py-2">
            <div className="flex flex-row justify-between container items-center text-xl font-bold text-gray-200 dark:text-gray-800">
                <div onClick={() => props.toggleTheme()} className="md:ml-0 ml-3">
                    {props.currentTheme === 'dark' ? <i className="fas fa-moon"/> : <i className="fas fa-sun"/>}
                </div>
                <div className="md:flex hidden flex-row">
                    {renderLinks()}
                </div>
            </div>
        </nav>
    )
}

export default Header