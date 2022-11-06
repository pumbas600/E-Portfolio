import LinkBase from './LinkBase';

import { ReactNode } from 'react';

export interface LinkColours {
	text: string;
	bg: string;
}

interface AnimatedLinkProps {
	href: string;
	className?: string;
	colours?: LinkColours;
	children?: ReactNode;
}

export default function AnimatedLink({ href, className, colours, children }: AnimatedLinkProps) {
	const specificColours = colours ?? {
		text: 'dark:text-sky-300 text-sky-600',
		bg: 'dark:bg-sky-300 bg-sky-600',
	};

	return (
		<div className="group relative inline-block">
			<span className={`${specificColours.text} ${className ?? ''}`}>
				<LinkBase href={href}>{children}</LinkBase>
			</span>
			<span
				className={`${specificColours.bg ?? ''} block absolute h-0.5 w-full transition-transform
										ease-in-out scale-x-0 origin-right group-hover:scale-100
										group-hover:origin-left duration-500 opacity-95`}
			/>
		</div>
	);
}
