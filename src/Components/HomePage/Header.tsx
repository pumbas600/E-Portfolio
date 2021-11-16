import React from 'react';
import selfie from '../../Assets/Selfie.jpg';

interface IProps {
    toggleTheme: () => void;
}

const Header:React.FC<IProps> = (props) => {
    return (
        <div className="header-group">
            <div className="header-background">
                <div className="header centred-body">
                    <div className="profile-image">
                        <img src={selfie} alt="Josh Jeffers"/>
                    </div>
                    <div className="header-text">
                        <h1>Josh Jeffers</h1>
                        <div className="profile-links">
                            <a target="_blank" rel="noreferrer" href="https://github.com/pumbas600">
                                <i className="fab fa-github"/>
                            </a>
                            <a href="mailto:joshjeffers600@gmail.com">
                                <i className="far fa-envelope"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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