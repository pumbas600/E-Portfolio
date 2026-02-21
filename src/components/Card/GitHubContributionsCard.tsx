import ProjectCard from './ProjectCard';
import LinkBase from '../Links/LinkBase';
import { TechnologyBadges } from '../Badges/TechnologyBadges';
import Metric from '../Typography/Metric';
import { fail, ok, Result } from '@/utils/result';

async function fetchMetrics(): Promise<Result<{ totalCalls: number; pastWeekCalls: number }>> {
  try {
    const [totalResponse, pastWeekResponse] = await Promise.all([
      fetch('https://github.pumbas.net/api/metrics'),
      fetch('https://github.pumbas.net/api/metrics?days=7'),
    ]);

    if (totalResponse.ok && pastWeekResponse.ok) {
      const [{ count: totalCalls }, { count: pastWeekCalls }] = await Promise.all([
        totalResponse.json(),
        pastWeekResponse.json(),
      ]);

      return ok({ totalCalls, pastWeekCalls });
    }
  } catch (error) {
    console.error(error);
  }

  return fail('There was an unexpected error retrieving the metrics');
}

export default async function GitHubContributionsCard() {
  const metricsResult = await fetchMetrics();

  return (
    <ProjectCard
      highlighted
      name="GitHub Contributions"
      description={
        <>
          <p>
            GitHub Contributions is a simple API I made that can generated dynamic graphs of your
            recent GitHub contributions which can be used as image URLs in markdown files (Such as
            your public profile README). The API supports a number of query parameters which allow
            the style of the graph to be completely customised to suit the user&apos;s desires.
          </p>
          <p>
            It uses Next.JS for the API and{' '}
            <LinkBase href="https://github.pumbas.net">interactive playground</LinkBase>, React for
            rendering the contribution graph, Firestore for tracking usage metrics, and is hosted on
            an Oracle Cloud Infastructure compute instance.
          </p>
          {metricsResult.success && (
            <div>
              <Metric
                value={metricsResult.data.pastWeekCalls}
                label="graphs rendered in the past week."
              />
              <Metric value={metricsResult.data.totalCalls} label="graphs rendered in total." />
            </div>
          )}
        </>
      }
      date="April 2023"
      githubUrl="https://github.com/pumbas600/github-contributions"
      technologies={[
        TechnologyBadges.NextJs,
        TechnologyBadges.React,
        TechnologyBadges.TypeScript,
        TechnologyBadges.Firestore,
        TechnologyBadges.OracleCloud,
      ]}
    />
  );
}
