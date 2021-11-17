import React, {useState} from "react";

interface IProps {
    initiallyExpanded?: boolean;
}

const ExpandingDiv:React.FC<IProps> = (props) => {
    const [isExpanded, setIsExpanded] = useState(props.initiallyExpanded || false);

    return (
        <div>
            { isExpanded ? (
                props.children
            ) : (
                <button className="flex align-top" onClick={(): void => setIsExpanded(true)}>
                    <i className="fas fa-ellipsis-h ml-2 dark:text-gray-300 text-gray-700 md:text-base text-xs"/>
                </button>
            ) }
        </div>
    );
}

export default ExpandingDiv;