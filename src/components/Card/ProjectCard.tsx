import { BadgeContainer } from '../Badges/TechnologyBadges';
import Card from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { generateId } from '../../utils/utils';
import { ReactNode } from 'react';
import { SecondaryText } from '../Typography/Typography';
import ExteralLink from '../Links/ExternalLink';
import TechnologyBadge, { TechnologyBadgeProps } from '../Badges/TechnologyBadge';
import Badge from '../Badges/Badge';
import SparklesIcon from '../Icons/SparklesIcon';
import styles from './ProjectCard.module.css';
import { classes } from '@/utils/classes';

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
  return (
    <Card id={generateId(name)} className={classes(highlighted && styles.highlightedProjectCard)}>
      <div className={styles.metadata}>
        <SecondaryText>{date}</SecondaryText>
        {highlighted && <Badge variant="primary" label="Highlight" icon={<SparklesIcon />} />}
      </div>
      <h3>
        <ExteralLink href={githubUrl} variant="secondary">
          <FontAwesomeIcon icon={faGithub} />
          {name}
        </ExteralLink>
      </h3>
      <div className={styles.description}>{description}</div>
      <BadgeContainer>
        {technologies.map((props) => (
          <TechnologyBadge key={props.label} {...props} />
        ))}
      </BadgeContainer>
    </Card>
  );
}
