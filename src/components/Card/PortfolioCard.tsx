'use client';

import { Badges } from '../Badges';
import LinkBase from '../Links/LinkBase';
import ProjectCard from './ProjectCard';

export default function PortfolioCard() {
  return (
    <ProjectCard
      name="Portfolio"
      description={
        <p>
          This is the second iteration of my digital portfolio. It's primary purpose has been to exist as a playground
          where I can develop my frontend knowledge. It has allowed me to expose myself to React, and modern CSS
          features. The entire website is built using{' '}
          <LinkBase href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout">CSS grids</LinkBase> and
          fluid scales to dynamically adjust spacing and typography between mobile and desktop layouts. It also
          leverages Next.JS' Static Site Generation features to generate the HTML for the website at build time.
        </p>
      }
      date="February 2025"
      githubUrl="https://github.com/pumbas600/E-Portfolio"
      technologies={[Badges.NextJs, Badges.React, Badges.TypeScript]}
    />
  );
}
