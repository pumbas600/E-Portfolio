import React from "react";

interface IProps {
    title: string;
    description?: string;
}

const SectionTitle:React.FC<IProps> = (props) => {
    return (
        <div className="section-title">
            <div className="section-title-details">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default SectionTitle;