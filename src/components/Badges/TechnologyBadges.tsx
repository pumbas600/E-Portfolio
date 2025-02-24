'use client';

import styled from 'styled-components';
import { TechnologyBadgeProps } from './TechnologyBadge';
import TypeScriptIcon from '../Icons/TypeScriptIcon';
import NextJsIcon from '../Icons/NextJsIcon';
import ReactIcon from '../Icons/ReactIcon';
import FirestoreIcon from '../Icons/FirestoreIcon';
import OracleIcon from '../Icons/OracleIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJs } from '@fortawesome/free-brands-svg-icons';
import SprintBootIcon from '../Icons/SprintBootIcon';
import ThymeleafIcon from '../Icons/ThymeleafIcon';
import DerbyIcon from '../Icons/DerbyIcon';

export const TechnologyBadges = {
  TypeScript: {
    label: 'TypeScript',
    icon: <TypeScriptIcon />,
    hoverBackground: '#007ACC',
  },
  NextJs: {
    label: 'Next.js',
    icon: <NextJsIcon />,
    hoverBackground: '#000000',
  },
  React: {
    label: 'React',
    icon: <ReactIcon />,
    hoverColor: '#62dbee',
    hoverBackground: '#20232a',
  },
  Firestore: {
    label: 'Firestore',
    icon: <FirestoreIcon />,
    hoverColor: '#000000',
    hoverBackground: '#FFCA28',
  },
  OracleCloud: {
    label: 'Oracle Cloud',
    icon: <OracleIcon />,
    hoverBackground: '#EA1B22',
  },
  Java: {
    label: 'Java',
    icon: <FontAwesomeIcon icon={faJava} size="1x" />,
    hoverBackground: '#ED8B00',
  },
  JavaScript: {
    label: 'JavaScript',
    icon: <FontAwesomeIcon icon={faJs} size="1x" />,
    hoverColor: '#000000',
    hoverBackground: '#F7DF1E',
  },
  SprintBoot: {
    label: 'Spring Boot',
    icon: <SprintBootIcon />,
    hoverBackground: '#6db33f',
  },
  Thymeleaf: {
    label: 'Thymeleaf',
    icon: <ThymeleafIcon />,
    hoverBackground: '#005F0F',
  },
  Derby: {
    label: 'Derby',
    icon: <DerbyIcon />,
    hoverColor: '#000000',
    hoverBackground: '#ffffff',
  },
} satisfies Record<string, TechnologyBadgeProps>;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--space-0_75);
  row-gap: var(--space-0_5);
  margin-block-start: var(--space-0_5);
`;
