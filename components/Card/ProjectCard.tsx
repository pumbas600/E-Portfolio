import AnimatedLink from '../Links/AnimatedLink';
import Badges from '../Badges';
import Card from './index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { generateId } from '../Utils';
import { ReactNode } from 'react';
import { SecondaryText } from '../Typography';
import ExteralLink from '../Links/ExternalLink';
import styled from 'styled-components';

const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`;

interface ProjectCardProps {
  wip?: boolean;
  name: string;
  description: ReactNode;
  date: string;
  githubUrl: string;
  technologies: string[];
}

export default function ProjectCard({ wip, name, description, date, githubUrl, technologies }: ProjectCardProps) {
  return (
    <Card id={generateId(name)}>
      <SecondaryText>{date}</SecondaryText>
      <h3>
        <ExteralLink href={githubUrl} variant="secondary">
          <FontAwesomeIcon icon={faGithub} />
          {name}
        </ExteralLink>
      </h3>
      <Description>{description}</Description>
      <Badges badges={technologies} className="flex-wrap-reverse justify-end" />
    </Card>
  );
}
