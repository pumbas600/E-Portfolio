import React from "react"
import selfie from "../../Assets/Selfie.jpg";
import IconLink from "../Utils/IconLink";

const Overview: React.FC = () => {
    return (
        <div className="flex md:flex-row flex-col justify-center items-center mb-5">
            <img className="md:w-[16rem] md:mb-0 mb-2 w-56 rounded-full" src={selfie} alt="Josh Jeffers"/>
            <div className="md:ml-5 flex justify-center flex-col md:items-start items-center">
                <div className="font-bold md:text-8xl text-5xl">Josh Jeffers</div>
                <div className="font-semibold md:text-2xl text-base">Fullstack Software Engineering Student</div>
                <div className="mt-1 flex flex-row text-2xl md:justify-start justify-center">
                    <IconLink href="https://github.com/pumbas600">
                        <i className="mr-5 fab fa-github"/>
                    </IconLink>
                    <IconLink href="https://www.linkedin.com/in/josh-jeffers-657111233/">
                        <i className="mr-5 fab fa-linkedin"></i>
                    </IconLink>
                    <IconLink internal href="mailto:joshjeffers600@gmail.com">
                        <i className="mr-5 far fa-envelope"/>
                    </IconLink>
                </div>
            </div>
        </div>
    );
}

export default Overview;