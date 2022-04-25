import React from "react";
import Link from "../Utils/Link";

const Footer: React.FC = () => {

    const year = new Date().getFullYear();

    function renderLinks(links: string[]): JSX.Element[] {
        return links.map(link => {
            return <Link href={link}
                         animate
                         className="ml-2"
                         textColour="text-gray-200 dark:text-gray-800"
                         bgColour="bg-gray-200 dark:bg-gray-800"
            />
        })
    }

    return (
        <div className="w-full dark:bg-teal-200 bg-gray-800 md:py-3 py-2">
            <div className="container flex flex-row justify-between">
                <div className="text-base text-gray-200 dark:text-gray-800">
                    {`Copyright © ${year} Joshua Alex Jeffers`}
                </div>
                <div>
                    {renderLinks([])}
                </div>
            </div>
        </div>
    );
}

export default Footer;