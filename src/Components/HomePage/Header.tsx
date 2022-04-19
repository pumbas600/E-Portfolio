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
            <div className="flex flex-row justify-between centred-body items-center text-xl font-bold text-gray-200 dark:text-gray-800">
                <div onClick={() => props.toggleTheme()} className="md:ml-0 ml-3">
                    {props.currentTheme === 'dark' ? <i className="fas fa-moon"/> : <i className="fas fa-sun"/>}
                </div>
                <div className="md:flex hidden flex-row">
                    {renderLinks()}
                </div>
                <div className="md:hidden mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default Header