import React, { ReactNode } from 'react';

interface Props {
	className?: string;
	id?: string;
	children?: ReactNode;
}

const Card: React.FC<Props> = (props) => {
	return (
		<article
			className={`dark:border-0 border border-gray-200 justify-between bg-gradient-to-r rounded-lg dark:from-gray-700 dark:to-slate-600
                        shadow-xl md:py-5 py-4 md:px-8 px-5 ${props.className ?? ''}`}
			id={props.id}
		>
			{props.children}
		</article>
	);
};

export default Card;
