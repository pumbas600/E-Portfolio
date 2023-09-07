import Image from 'next/image';
import Title from '../../Title';
import { Theme } from '../../../pages';

interface ContributionsProps {
	theme: Theme;
}

export default function Contributions({ theme }: ContributionsProps) {
	const colour = theme === 'dark' ? '99F6E4' : '0284C7';

	return (
		<section>
			<Title name="Contributions" />
			<Image
				className="dark:border-0 border border-gray-200 justify-between bg-gradient-to-r rounded-lg dark:from-gray-700 dark:to-slate-600 shadow-xl"
				width={1000}
				height={400}
				src={`https://github.pumbas.net/api/contributions/pumbas600?width=1000&height=400&colour=${colour}&dotColour=FFFFFF`}
				alt="My GitHub contributions over the past 30 days"
			/>
		</section>
	);
}
