import React, {ChangeEvent} from "react";

interface IProps {
    isChecked?: boolean;
    classes?: string;
    onToggle: (isChecked: boolean) => void;
    shape: 'round' | 'square'
}

const ToggleSwitch:React.FC<IProps> = (props) => {

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (input: ChangeEvent<HTMLInputElement>): void => {
        props.onToggle(input.target.checked);
    }

    return (
        // Labels allows you to click through it
        <label className={`toggle-switch ${props.classes}`}>
            <input type="checkbox" checked={props.isChecked} onChange={onChange}/>
            <span className={`slider ${props.shape}`}/>
        </label>
    );
}

export default ToggleSwitch;