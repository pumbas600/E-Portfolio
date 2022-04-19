import React from "react";
import {generateId} from "./ProjectUtils";

interface Props {
    name: string;
    className?: string;
}

const Title: React.FC<Props> = (props) => {
    return (
        <div
            id={generateId(props.name)}
            className={`dark:text-gray-200 text-gray-800 text-3xl md:pt-10 md:mb-5 pt-7 mb-3 font-bold ${props.className ?? ''}`}
        >
            {props.name}
        </div>
    );
}

export default Title;