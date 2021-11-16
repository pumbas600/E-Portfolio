import React from "react";
import SectionTitle from "./SectionTitle";

interface IProps {
    title: string;
    description?: string;
    id?: string;
}

const Section:React.FC<IProps> = (props) => {
    return (
        <section id={props.id || ''} className="centred-body flex md:flex-row flex-col justify-between">
            <SectionTitle title={props.title} description={props.description}/>
            <div className="mb-8 grid grid-cols-1 gap-5">
                {props.children}
            </div>
        </section>
    );
}

export default Section;