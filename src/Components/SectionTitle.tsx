import React from "react";

interface IProps {
    title: string;
    description?: string;
}

const SectionTitle:React.FC<IProps> = (props) => {
    return (
        <div className="mr-5 pr-5 border-r-2 border-solid dark:border-white border-black">
            <div className="text-right">
                <h2 className="text-3xl font-bold dark:text-white text-black mb-5">{props.title}</h2>
                <p className="dark:text-gray-300 text-gray-700 italic text-base">{props.description}</p>
            </div>
        </div>
    );
}

export default SectionTitle;