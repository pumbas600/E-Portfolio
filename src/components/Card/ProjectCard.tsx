'use client';

import { BadgeContainer } from '../Badges/TechnologyBadges';
import Card from './index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { generateId } from '../Utils';
import { ReactNode } from 'react';
import { SecondaryText } from '../Typography';
import ExteralLink from '../Links/ExternalLink';
import styled from 'styled-components';
import TechnologyBadge, { TechnologyBadgeProps } from '../Badges/TechnologyBadge';
import Badge from '../Badges/Badge';
import SparklesIcon from '../Icons/SparklesIcon';

const HighlightedProjectCard = styled(Card)`
  // Modified from: https://codepen.io/michellebarker/pen/gOMBPQj

  @property --angle {
    syntax: '<angle>';
    inherits: true;
    initial-value: 0deg;
  }

  --highlight: var(--primary-accent-color);
  --highlight-transparent: rgb(from var(--highlight) r g b / 0.1);

  --main-background: linear-gradient(var(--secondary-background-color), var(--secondary-background-color));
  --gradient-border: conic-gradient(
    from var(--angle),
    transparent,
    var(--highlight) 0.1turn,
    var(--highlight) 0.15turn,
    transparent 0.25turn,
    transparent 0.5turn,
    var(--highlight) 0.6turn,
    var(--highlight) 0.65turn,
    transparent 0.75turn
  );

  animation: borderRotate 4000ms linear infinite forwards;
  background: var(--main-background) padding-box, var(--gradient-border) border-box, var(--main-background) border-box;
  border: var(--space-0_25) solid transparent;
  box-shadow: 0 0 var(--space-1_25) var(--space-0_25) var(--highlight-transparent);

  @keyframes borderRotate {
    100% {
      --angle: 360deg;
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--space-0_75);
`;

const SecondaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface ProjectCardProps {
  highlighted?: boolean;
  name: string;
  description: ReactNode;
  date: string;
  githubUrl: string;
  technologies: TechnologyBadgeProps[];
}

export default function ProjectCard({
  highlighted,
  name,
  description,
  date,
  githubUrl,
  technologies,
}: ProjectCardProps) {
  const CardComponent = highlighted ? HighlightedProjectCard : Card;

  return (
    <CardComponent id={generateId(name)}>
      <SecondaryWrapper>
        <SecondaryText>{date}</SecondaryText>
        {highlighted && <Badge label="Highlight" icon={<SparklesIcon />} />}
      </SecondaryWrapper>
      <h3>
        <ExteralLink href={githubUrl} variant="secondary">
          <FontAwesomeIcon icon={faGithub} />
          {name}
        </ExteralLink>
      </h3>
      <Description>{description}</Description>
      <BadgeContainer>
        {technologies.map((props) => (
          <TechnologyBadge key={props.label} {...props} />
        ))}
      </BadgeContainer>
    </CardComponent>
  );
}
