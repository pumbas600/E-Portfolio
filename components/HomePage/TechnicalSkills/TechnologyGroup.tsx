import Badges from '../../Badges';

interface TechnologicalGroupProps {
	title: string;
	technologies: string[];
}

export default function TechnologyGroup({ title, technologies }: TechnologicalGroupProps) {
	return (
		<div>
			<div className="text-lg font-semibold">{title}</div>
			<Badges badges={technologies} />
		</div>
	);
}
