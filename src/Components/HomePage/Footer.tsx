import React from "react";
import Link from "../Utils/Link";
import { Links } from "../../App";

const Footer: React.FC = () => {

    const year = new Date().getFullYear();

    function renderLinks(): JSX.Element[] {
        return Links.map(link => {
            return <Link href={link.href}
                         animate
                         className="md:ml-10 ml-5"
                         textColour="text-gray-200 dark:text-gray-800"
                         bgColour="bg-gray-200 dark:bg-gray-800"
            >
                {link.name}
            </Link>
        })
    }

    return (
        <div className="w-full dark:bg-teal-200 bg-gray-800 md:py-3 py-2">
            <div className="container flex md:flex-row flex-col-reverse md:justify-between items-center text-base">
                <div className="text-gray-200 dark:text-gray-800">
                    {`Copyright © ${year} Joshua Alex Jeffers`}
                </div>
                <div className="font-semibold">
                    {renderLinks()}
                </div>
            </div>
        </div>
    );
}

export default Footer;