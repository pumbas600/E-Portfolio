import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { getPastWeekApiCalls, getTotalApiCalls } from '../../firebase';

export default function GitHubContributionsCard() {
	const [totalCalls, setTotalCalls] = useState(-1);
	const [pastWeekCalls, setPastWeekCalls] = useState(-1);

	useEffect(() => {
		getTotalApiCalls().then(setTotalCalls);
		getPastWeekApiCalls().then(setPastWeekCalls);
	}, []);

	return (
		<ProjectCard
			name="GitHub Contributions"
			description={
				<div>
					GitHub Contributions is a simple API I made that can generated dynamic graphs of your recent GitHub
					contributions which can be used as image urls in markdown files. The API supports a number of query
					parameters which allow the style of the graph to be completely customised to get the style desired
					by users.
					<br />
					<br />
					It utilises Next.JS for the API, React for rendering the contribution graph, Firestore for tracking
					usage metrics and is hosted on an Oracle Cloud Infastructure compute instance.
					<br />
					<div>
						<b>Contribution Graphs Renderered</b>
						<div className="flex flex-col gap-2">
							<div>
								<b>In total</b> {totalCalls === -1 ? '-' : totalCalls}
							</div>
							<div>
								<b>In the past week</b> {pastWeekCalls === -1 ? '-' : pastWeekCalls}
							</div>
						</div>
					</div>
				</div>
			}
			date="April 2023"
			githubUrl="https://github.com/pumbas600/github-contributions"
			technologies={['nextjs', 'react', 'typescript', 'firestore', 'oraclecloud']}
		/>
	);
}
