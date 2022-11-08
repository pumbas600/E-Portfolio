import { ReactNode } from 'react';

interface LabelledInputProps {
	label: string;
	className?: string;
	children?: ReactNode;
}

export default function LabelledInput({ label, className, children }: LabelledInputProps) {
	return (
		<div className={className}>
			<label>{label}</label>
			{children}
		</div>
	);
}
