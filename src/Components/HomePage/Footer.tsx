import React from "react";
import Link from "../Utils/Link";
import { Links } from "../../App";

const Footer: React.FC = () => {

    const year = new Date().getFullYear();

    function renderLinks(): JSX.Element[] {
        return Links.map(link => {
            return <Link key={link.name}
                         href={link.href}
                         textColour="text-gray-200 dark:text-gray-300"
                         bgColour="bg-gray-200 dark:bg-gray-300"
            >
                {link.name}
            </Link>
        })
    }

    return (
        <div className="w-full dark:bg-gradient-to-r dark:from-gray-700 dark:to-slate-600 bg-gray-800 md:py-3 py-2">
            <div className="container flex md:flex-row flex-col-reverse md:justify-between items-center text-base">
                <div className="text-gray-200 dark:text-gray-300">
                    {`Copyright © ${year} Joshua Alex Jeffers`}
                </div>
                <div className="font-semibold md:space-x-10 space-x-5">
                    {renderLinks()}
                </div>
            </div>
        </div>
    );
}

export default Footer;