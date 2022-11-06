import BadgeUrls from '../../data/BadgeUrls';

interface BadgeProps {
	name: string;
	className?: string;
}

export default function Badge({ name, className }: BadgeProps) {
	const url = BadgeUrls[name];

	return (
		<picture>
			<source srcSet={url} type="image/svg" />
			<img alt={name} src={url} className={`${className ?? ''} md:h-auto sm:h-6 h-5 md:rounded-xl rounded-lg`} />
		</picture>
	);
}
