import React from "react"
import selfie from "../../Assets/Selfie.jpg";
import IconLink from "../Utils/IconLink";
import { Links } from "../../App";

const Overview: React.FC = () => {

    function renderLinks(): JSX.Element[] {
        return Links.map(link => {
            return (
                <IconLink className="mr-5" href={link.href}>
                    <i className={link.icon}/>
                </IconLink>
            );
        })
    }

    return (
        <div className="flex md:flex-row flex-col justify-center items-center mb-5">
            <img className="md:w-[16rem] md:mb-0 mb-2 w-56 rounded-full" src={selfie} alt="Josh Jeffers"/>
            <div className="md:ml-5 flex justify-center flex-col md:items-start items-center">
                <div className="font-bold md:text-8xl text-5xl">Josh Jeffers</div>
                <div className="font-semibold md:text-2xl text-base">Fullstack Software Engineering Student</div>
                <div className="mt-1 flex flex-row text-2xl md:justify-start justify-center">
                    {renderLinks()}
                </div>
            </div>
        </div>
    );
}

export default Overview;