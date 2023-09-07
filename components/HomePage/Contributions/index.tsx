import Image from 'next/image';
import Title from '../../Title';

export default function Contributions() {
	return (
		<section>
			<Title name="Contributions" />
			<Image
				width={1000}
				height={600}
				src="https://github.pumbas.net/api/contributions/pumbas600"
				alt="My GitHub contributions over the past 30 days"
			/>
		</section>
	);
}
