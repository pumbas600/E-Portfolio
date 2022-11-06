import { generateId } from '../Utils';

interface TitleProps {
	name: string;
	className?: string;
}

export default function Title({ name, className }: TitleProps) {
	return (
		<div
			id={generateId(name)}
			className={`dark:text-gray-200 text-gray-800 text-3xl md:pt-10 md:mb-5 pt-7 mb-3 font-bold
									${className ?? ''}`}
		>
			{name}
		</div>
	);
}
