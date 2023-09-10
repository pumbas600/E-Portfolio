import Image from 'next/image';
import Title from '../../Title';
import { Theme } from '../../../pages';
import Card from '../../Card';
import AnimatedLink from '../../Links/AnimatedLink';

interface ContributionsProps {
	theme: Theme;
}

export default function Contributions({ theme }: ContributionsProps) {
	const colour = theme === 'dark' ? '99F6E4' : '0284C7';

	return (
		<section>
			<Title name="Contributions" />
			<Card>
				<Image
					className="-ml-2"
					width={1000}
					height={400}
					src={`https://github.pumbas.net/api/contributions/pumbas600?width=1000&height=400&colour=${colour}&dotColour=FFFFFF`}
					alt="My GitHub contributions over the past 30 days"
				/>
				<div>
					This graph has been dynamically generated from my recent GitHub contributions using my{' '}
					<AnimatedLink href="#github-contributions">GitHub Contributions</AnimatedLink> API.
				</div>
			</Card>
		</section>
	);
}
