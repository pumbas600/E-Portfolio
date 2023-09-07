import TechnologyGroup from './TechnologyGroup';
import Title from '../../Title';

export default function TechnicalSkills() {
	return (
		<section className="mb-8">
			<Title name="Technical Skills" />
			<div className="md:ml-8 ml-5 flex flex-col gap-y-3 mt-2">
				<TechnologyGroup
					title="Frontend"
					technologies={['nextjs', 'react', 'typescript', 'tailwindcss', 'javascript']}
				/>
				<TechnologyGroup
					title="Backend"
					technologies={['express', 'typescript', 'springboot', 'java', 'jaxrs', 'oraclecloud']}
				/>
				<TechnologyGroup
					title="Databases"
					technologies={['sqlite', 'mongodb', 'derby', 'firebase', 'postgresql']}
				/>
				<TechnologyGroup title="Other*" technologies={['unity', 'c', 'python', 'c#', 'git']} />
				<em className="md:text-base text-sm">*Non-web development related.</em>
			</div>
		</section>
	);
}
