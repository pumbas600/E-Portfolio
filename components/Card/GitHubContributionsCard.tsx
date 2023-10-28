import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import AnimatedLink from '../Links/AnimatedLink';

function formatMetric(metric: number): string {
  if (metric === -1) return '-';
  if (metric < 1000) return metric.toString();
  return `${(metric / 1000).toFixed(1)}k`;
}

export default function GitHubContributionsCard() {
  const [totalCalls, setTotalCalls] = useState(-1);
  const [pastWeekCalls, setPastWeekCalls] = useState(-1);

  useEffect(() => {
    fetchMetrics();
  }, []);

  function fetchMetrics(): void {
    fetch('https://github.pumbas.net/api/metrics')
      .then((response) => response.json())
      .then(({ count }) => setTotalCalls(count))
      .catch(console.error);

    fetch('https://github.pumbas.net/api/metrics?days=7')
      .then((response) => response.json())
      .then(({ count }) => setPastWeekCalls(count))
      .catch(console.error);
  }

  return (
    <ProjectCard
      name="GitHub Contributions"
      description={
        <>
          <p>
            GitHub Contributions is a simple API I made that can generated dynamic graphs of your recent GitHub
            contributions which can be used as image URLs in markdown files (Such as your public profile README). The
            API supports a number of query parameters which allow the style of the graph to be completely customised to
            suit the user&apos;s desires.
          </p>
          <div>
            It uses Next.JS for the API and{' '}
            <AnimatedLink href="https://github.pumbas.net">interactive playground</AnimatedLink>, React for rendering
            the contribution graph, Firestore for tracking usage metrics, and is hosted on an Oracle Cloud Infastructure
            compute instance.
          </div>
          <div className="flex flex-col">
            <div>
              <b className="text-xl dark:text-teal-200 text-sky-600">{formatMetric(pastWeekCalls)}</b>
              &nbsp;graphs rendered in the past week.
            </div>
            <div>
              <b className="text-xl dark:text-teal-200 text-sky-600">{formatMetric(totalCalls)}</b>
              &nbsp;graphs rendered in total.
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
