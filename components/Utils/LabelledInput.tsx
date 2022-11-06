import { ReactNode } from 'react';

interface Props {
	label: string;
	className?: string;
	children?: ReactNode;
}

const LabelledInput: React.FC<Props> = (props) => {
	return (
		<div className={props.className}>
			<div className="text-lg font-semibold mb-1">{props.label}</div>
			{props.children}
		</div>
	);
};

export default LabelledInput;
