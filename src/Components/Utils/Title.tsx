import React from "react";
import {generateId} from "./ProjectUtils";

interface Props {
    name: string;
}

const Title: React.FC<Props> = (props) => {
    return <div id={generateId(props.name)} className="text-gray-200 text-2xl mt-7 mb-3 font-bold">
        {props.name}
    </div>
}

export default Title;