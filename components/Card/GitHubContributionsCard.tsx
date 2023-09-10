import ProjectCard from './ProjectCard';

export default function GitHubContributionsCard() {
	return (
		<ProjectCard
			name="GitHub Contributions"
			description={
				<>
					GitHub Contributions is a simple API I made that can generated dynamic graphs of your recent GitHub
					contributions which can be used as image urls in markdown files. The API supports a number of query
					parameters which allow the style of the graph to be completely customised to get the style desired
					by users.
					<br />
					<br />
					It utilises Next.JS for the API, React for rendering the contribution graph, Firestore for tracking
					usage metrics and is hosted on an Oracle Cloud Infastructure compute instance.
				</>
			}
			date="April 2023"
			githubUrl="https://github.com/pumbas600/github-contributions"
			technologies={['nextjs', 'react', 'typescript', 'firestore', 'oraclecloud']}
		/>
	);
}
