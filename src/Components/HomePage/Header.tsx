import React from 'react';

interface Props {
    toggleTheme: () => void;
}

const Header:React.FC<Props> = (props) => {
    return (
        <div className="w-full bg-teal-200 py-2 shadow-teal-200/50 shadow-sm">
            <div className="flex flex-row justify-end centred-body items-center text-xl font-bold">
                <i onClick={() => props.toggleTheme()} className="ml-5 fas fa-adjust"/>
                <a href="#about-me" className="ml-5">About Me</a>
                <a href="#technical-skills" className="ml-5">Skills</a>
                <a href="#projects" className="ml-5">Projects</a>
                <a href="#contact-me" className="ml-5">Contact Me</a>
            </div>
        </div>
    )
}

export default Header