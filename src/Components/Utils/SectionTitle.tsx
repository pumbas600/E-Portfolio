import React from "react";

interface IProps {
    title: string;
    description?: string;
}

const SectionTitle:React.FC<IProps> = (props) => {
    return (
        <div className="section-title mb-5 md:mb-0 md:mr-5 pb-3 md:pb-0 md:pr-5 border-b-2 md:border-b-0 md:border-r-2 border-solid dark:border-white border-black">
            <div className="md:text-right">
                <h2 className="mb-3 md:mb-5">{props.title}</h2>
                <p className="italic">{props.description}</p>
            </div>
        </div>
    );
}

export default SectionTitle;