import React from "react";

interface Props {
    label: string;
}

const LabelledInput: React.FC<Props> = (props) => {
    return (
        <div>
            <div className="text-lg font-semibold mb-1">
                {props.label}
            </div>
            {props.children}
        </div>
    );
}

export default LabelledInput;