'use client';

import { Badges } from '../Badges';
import ProjectCard from './ProjectCard';

export default function PortfolioCard() {
  return (
    <ProjectCard
      name="Portfolio"
      description={
        <>
          This digital portfolio was created as a way for me to develop my frontend knowledge and expose myself to
          React, and modern CSS features. I leaveraged Next.JS for its Static Site Generation, allowing the HTML to be
          generated at build time.
        </>
      }
      date="February 2025"
      githubUrl="https://github.com/pumbas600/E-Portfolio"
      technologies={[Badges.NextJs, Badges.React, Badges.TypeScript]}
    />
  );
}
