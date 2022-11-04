import { ReactNode } from 'react';

interface LinkBaseProps {
	href: string;
	internal?: boolean;
	className?: string;
	children?: ReactNode;
}

const LinkBase: React.FC<LinkBaseProps> = (props) => {
	return (
		<a
			target={props.internal ? undefined : '_blank'}
			rel="noreferrer"
			href={props.href}
			className={`${props.className ?? ''} inline-block`}
		>
			{props.children}
		</a>
	);
};

export default LinkBase;
export type { LinkBaseProps };
