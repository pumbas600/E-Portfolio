import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string;
	className?: string;
}

export default function InputField({ error, className, ...inputFieldProps }: InputFieldProps) {
	function styleBorder() {
		return error?.length !== 0 ? 'border-red-500' : 'dark:border-gray-300 border-gray-800';
	}

	return (
		<div className="w-full">
			<input
				className={`${className ?? ''} rounded-md bg-transparent p-2 outline-none border-2
                           dark:focus:border-teal-200 focus:border-sky-500 w-full ${styleBorder()}`}
				name={inputFieldProps.name ?? inputFieldProps.id}
				{...inputFieldProps}
			/>
			{error && (
				<div className="text-red-500 text-sm px-2 overflow-ellipsis whitespace-nowrap overflow-hidden">
					{error}
				</div>
			)}
		</div>
	);
}
