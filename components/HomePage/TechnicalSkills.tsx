import Title from '../Utils/Title';
import TechnologyGroup from '../Utils/TechnologyGroup';
import React from 'react';

const TechnicalSkills: React.FC = () => {
	return (
		<div className="mb-8">
			<Title name="Technical Skills" />
			<div className="md:ml-8 ml-5 flex flex-col gap-y-3 mt-2">
				<TechnologyGroup
					title="Frontend"
					technologies={['react', 'jquery', 'typescript', 'tailwindcss', 'thymeleaf', 'javascript', 'scss']}
				/>
				<TechnologyGroup
					title="Backend"
					technologies={['express', 'gradle', 'typescript', 'nodejs', 'springboot', 'java']}
				/>
				<TechnologyGroup title="Databases" technologies={['sqlite', 'mongodb', 'derby']} />
				<TechnologyGroup title="Other*" technologies={['unity', 'c', 'python', 'c#', 'git']} />
				<em className="md:text-base text-sm">*Non-web development related.</em>
			</div>
		</div>
	);
};

export default TechnicalSkills;
