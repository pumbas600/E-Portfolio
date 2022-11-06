interface BadgeProps {
	name: string;
	className?: string;
}

const BadgeUrls: { [name: string]: string | undefined } = require('../../assets/TechnologyIcons.json');

const Badge: React.FC<BadgeProps> = (props) => {
	const url = BadgeUrls[props.name];

	return (
		<picture>
			<source srcSet={url} type="image/svg+xml" />
			<img
				alt={props.name}
				src={url}
				className={`${props.className ?? ''} md:h-auto sm:h-6 h-5 md:rounded-xl rounded-lg`}
			/>
		</picture>
	);
};

export default Badge;
