import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { getPastWeekApiCalls, getTotalApiCalls } from '../../firebase';

function formatMetric(metric: number): string {
	if (metric === -1) return '-';
	if (metric < 1000) return metric.toString();
	return `${(metric / 1000).toFixed(1)}k`;
}

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
				<>
					<p>
						GitHub Contributions is a simple API I made that can generated dynamic graphs of your recent
						GitHub contributions which can be used as image urls in markdown files. The API supports a
						number of query parameters which allow the style of the graph to be completely customised to get
						the style desired by users.
					</p>
					<p>
						It utilises Next.JS for the API, React for rendering the contribution graph, Firestore for
						tracking usage metrics and is hosted on an Oracle Cloud Infastructure compute instance.
					</p>
					<div>
						<b>API usage metrics:</b>
						<div className="flex flex-col">
							<div>
								<b className="text-xl dark:text-teal-200 text-sky-600">{formatMetric(pastWeekCalls)}</b>
								&nbsp;graphs rendered in the past week.
							</div>
							<div>
								<b className="text-xl dark:text-teal-200 text-sky-600">{formatMetric(totalCalls)}</b>
								&nbsp;graphs rendered since 4 September 2023.
							</div>
						</div>
					</div>
				</>
			}
			date="April 2023"
			githubUrl="https://github.com/pumbas600/github-contributions"
			technologies={['nextjs', 'react', 'typescript', 'firestore', 'oraclecloud']}
		/>
	);
}
