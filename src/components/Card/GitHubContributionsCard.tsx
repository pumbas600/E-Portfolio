'use client';

import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import LinkBase from '../Links/LinkBase';
import { Badges } from '../Badges';
import Metric from '../Metric';

export default function GitHubContributionsCard() {
  const [totalCalls, setTotalCalls] = useState<number | undefined>(undefined);
  const [pastWeekCalls, setPastWeekCalls] = useState<number | undefined>(undefined);

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
      highlighted
      name="GitHub Contributions"
      description={
        <>
          <p>
            GitHub Contributions is a simple API I made that can generated dynamic graphs of your recent GitHub
            contributions which can be used as image URLs in markdown files (Such as your public profile README). The
            API supports a number of query parameters which allow the style of the graph to be completely customised to
            suit the user&apos;s desires.
          </p>
          <p>
            It uses Next.JS for the API and <LinkBase href="https://github.pumbas.net">interactive playground</LinkBase>
            , React for rendering the contribution graph, Firestore for tracking usage metrics, and is hosted on an
            Oracle Cloud Infastructure compute instance.
          </p>
          <div>
            <Metric value={pastWeekCalls} label="graphs rendered in the past week." />
            <Metric value={totalCalls} label="graphs rendered in total." />
          </div>
        </>
      }
      date="April 2023"
      githubUrl="https://github.com/pumbas600/github-contributions"
      technologies={[Badges.NextJs, Badges.React, Badges.TypeScript, Badges.Firestore, Badges.OracleCloud]}
    />
  );
}
