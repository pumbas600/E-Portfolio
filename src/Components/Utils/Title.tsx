import React from "react";

const Title: React.FC = (props) => {
    return <div className="text-gray-200 text-2xl mt-7 mb-3 font-bold">
        {props.children}
    </div>
}

export default Title;