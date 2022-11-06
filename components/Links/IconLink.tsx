import LinkBase, { LinkBaseProps } from './LinkBase';

export default function IconLink(props: LinkBaseProps) {
	return (
		<div className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
			<LinkBase {...props} />
		</div>
	);
}
