import React from "react";

interface Props {
    className?: string;
    hasError?: boolean;
    error?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: 'text' | 'email';
    name?: string;
    id?: string;
}

const InputField: React.FC<Props> = (props) => {

    function styleBorder(error: boolean) {
        return error ? 'border-red-500' : 'dark:border-gray-300 border-gray-500'
    }

    return (
        <div className="w-full">
            <input
                className={`${props.className ?? ''} rounded-md bg-transparent p-2 outline-none
                            border-2 dark:focus:border-teal-200 focus:border-gray-800 w-full ${styleBorder(props.hasError ?? false)}`}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                type={props.type ?? 'text'}
                id={props.id}
                required={props.required}
                name={props.name ?? props.id}
            />
            {props.error !== undefined && (
                <div className="text-red-500 text-sm px-2 overflow-ellipsis whitespace-nowrap overflow-hidden">
                    {props.error}
                </div>
            )}
        </div>
    );
}

export default InputField;