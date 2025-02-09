import { BadgeContainer } from '../Badges';
import Card from './index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { generateId } from '../Utils';
import { ReactNode } from 'react';
import { SecondaryText } from '../Typography';
import ExteralLink from '../Links/ExternalLink';
import styled from 'styled-components';
import Badge, { BadgeProps } from '../Badges/Badge';

const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--space-0_75);
`;

interface ProjectCardProps {
  wip?: boolean;
  name: string;
  description: ReactNode;
  date: string;
  githubUrl: string;
  technologies: BadgeProps[];
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
      <BadgeContainer>
        {technologies.map((props) => (
          <Badge {...props} />
        ))}
      </BadgeContainer>
    </Card>
  );
}
