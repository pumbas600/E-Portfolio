import React from "react";

interface Props {
    className?: string;
    error?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = (props) => {
    return (
        <div className="w-full">
            <input
                className={`${props.className ?? ''} rounded-md border-gray-300 bg-transparent p-2 outline-none
                            border-2 focus:border-teal-200 w-full invalid:border-red-500`}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                required={props.error !== ''}
                type="text"
            />
            {props.error !== '' && (
                <div className="text-red-500 text-sm px-2 overflow-ellipsis whitespace-nowrap overflow-hidden">
                    {props.error}
                </div>
            )}
        </div>
    );
}

export default TextField;