import React from "react";

interface Props {
    className?: string;
    error?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = (props) => {

    const hasError = props.error !== '';

    function styleBorder(error: boolean) {
        return error ? 'border-red-500' : 'border-gray-300'
    }

    return (
        <div className="w-full">
            <input
                className={`${props.className ?? ''} rounded-md bg-transparent p-2 outline-none
                            border-2 focus:border-teal-200 w-full ${styleBorder(hasError)}`}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                type="text"
            />
            {hasError && (
                <div className="text-red-500 text-sm px-2 overflow-ellipsis whitespace-nowrap overflow-hidden">
                    {props.error}
                </div>
            )}
        </div>
    );
}

export default TextField;