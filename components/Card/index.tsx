import { ReactNode } from 'react';

interface CardProps {
	id?: string;
	className?: string;
	children?: ReactNode;
}

export default function Card({ id, className, children }: CardProps) {
	return (
		<article
			className={`dark:border-0 border border-gray-200 justify-between bg-gradient-to-r rounded-lg dark:from-gray-700 dark:to-slate-600
                  shadow-xl md:py-5 py-4 md:px-8 px-5 ${className ?? ''}`}
			id={id}
		>
			{children}
		</article>
	);
}
