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
                    textColour="text-gray-800 dark:text-gray-200"
                    bgColour="bg-gray-800 dark:bg-gray-200"
                    href={`#${link}`}
                    className="md:ml-10 ml-5"
                >
                    {name}
                </Link>
            );
        });
    }

    return (
        <nav className="w-full md:pb-1 md:pt-5 py-2">
            <div className="flex flex-row justify-between container items-center text-lg font-semibold text-gray-800 dark:text-gray-200">
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