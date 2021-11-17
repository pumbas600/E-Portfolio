import React, {useState} from "react";

interface IProps {
    onClick?: (isExpanded: boolean) => void;
    tooltipText?: string;
    tooltipWidthClass?: string;
    initiallyExpanded?: boolean;
    backgroundClasses?: string;
}

const ExpandButton:React.FC<IProps> = (props) => {

    const [isExpanded, setIsExpanded] = useState(props.initiallyExpanded || false);

    function onClick() {
        if (props.onClick)
            props.onClick(!isExpanded);
        setIsExpanded(!isExpanded);
    }

    return (
        <div className={`hidden md:flex items-center ${props.tooltipText && 'tooltip'}
                        ${props.tooltipWidthClass || 'default-tooltip-width'}`}
             tooltip-text={props.tooltipText}>

            <button onClick={onClick}
                    className={`filter drop-shadow-md bg-purple-500 w-9 h-9 flex justify-center items-center
                                rounded-full hover:bg-purple-600 transform active:rotate-45 transition-all 
                                ${isExpanded && 'rotate-45'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </button>
        </div>
    )
}

export default ExpandButton;