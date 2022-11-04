import LinkBase, { LinkBaseProps } from './LinkBase';

const IconLink: React.FC<LinkBaseProps> = (props) => {
	return (
		<LinkBase
			href={props.href}
			className={`${props.className ?? ''} transition-transform duration-200 ease-in-out hover:-translate-y-1`}
			internal={props.internal}
		>
			{props.children}
		</LinkBase>
	);
};

export default IconLink;
