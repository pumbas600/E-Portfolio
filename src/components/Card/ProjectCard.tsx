'use client';

import { BadgeContainer } from '../Badges';
import Card, { CardLayout } from './index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { generateId } from '../Utils';
import { Fragment, ReactNode } from 'react';
import { SecondaryText } from '../Typography';
import ExteralLink from '../Links/ExternalLink';
import styled from 'styled-components';
import Badge, { BadgeProps } from '../Badges/Badge';
import SparklesIcon from '../Icons/SparklesIcon';

const HighlightedProjectWrapper = styled(CardLayout)`
  position: relative;
`;

const HighlightedIcon = styled(SparklesIcon)`
  position: absolute;
  height: var(--space-4);
  color: var(--primary-accent-color);
`;

const TopRightHighightedIcon = styled(HighlightedIcon)`
  top: 0;
  right: 0;
  transform: translate(20%, -20%);
`;

const BottomLeftHighlightedIcon = styled(HighlightedIcon)`
  left: 0;
  bottom: 0;
  transform: translate(-20%, 20%);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--space-0_75);
`;

interface ProjectCardProps {
  highlighted?: boolean;
  name: string;
  description: ReactNode;
  date: string;
  githubUrl: string;
  technologies: BadgeProps[];
}

export default function ProjectCard({
  highlighted,
  name,
  description,
  date,
  githubUrl,
  technologies,
}: ProjectCardProps) {
  const Wrapper = highlighted ? HighlightedProjectWrapper : Fragment;

  return (
    <Wrapper>
      {highlighted && <TopRightHighightedIcon />}
      {highlighted && <BottomLeftHighlightedIcon />}
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
            <Badge key={props.name} {...props} />
          ))}
        </BadgeContainer>
      </Card>
    </Wrapper>
  );
}
