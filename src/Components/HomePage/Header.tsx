import React from 'react';

interface Props {
    toggleTheme: () => void;
}

const Header:React.FC<Props> = (props) => {
    return (
        <div className="header-group">
            <div className="header-secondary">
                <div className="navigation-buttons centred-body">
                    <i onClick={() => props.toggleTheme()} className="btn nav-button fas fa-adjust"/>
                    <a href="#about-me"  className="nav-button link-hover-effect">About Me</a>
                    <a href="#education" className="nav-button link-hover-effect">Education</a>
                    <a href="#projects"  className="nav-button link-hover-effect">Projects</a>
                    <a href="#contact-me"  className="nav-button link-hover-effect">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default Header