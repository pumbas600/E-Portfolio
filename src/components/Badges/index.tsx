'use client';

import styled from 'styled-components';
import { BadgeProps } from './Badge';
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

export const Badges = {
  TypeScript: {
    name: 'TypeScript',
    icon: <TypeScriptIcon />,
    hoverBackground: '#007ACC',
  },
  NextJs: {
    name: 'Next.js',
    icon: <NextJsIcon />,
    hoverBackground: '#000000',
  },
  React: {
    name: 'React',
    icon: <ReactIcon />,
    hoverColor: '#62dbee',
    hoverBackground: '#20232a',
  },
  Firestore: {
    name: 'Firestore',
    icon: <FirestoreIcon />,
    hoverColor: '#000000',
    hoverBackground: '#FFCA28',
  },
  OracleCloud: {
    name: 'Oracle Cloud',
    icon: <OracleIcon />,
    hoverBackground: '#EA1B22',
  },
  Java: {
    name: 'Java',
    icon: <FontAwesomeIcon icon={faJava} size="1x" />,
    hoverBackground: '#ED8B00',
  },
  JavaScript: {
    name: 'JavaScript',
    icon: <FontAwesomeIcon icon={faJs} size="1x" />,
    hoverColor: '#000000',
    hoverBackground: '#F7DF1E',
  },
  SprintBoot: {
    name: 'Spring Boot',
    icon: <SprintBootIcon />,
    hoverBackground: '#6db33f',
  },
  Thymeleaf: {
    name: 'Thymeleaf',
    icon: <ThymeleafIcon />,
    hoverBackground: '#005F0F',
  },
  Derby: {
    name: 'Derby',
    icon: <DerbyIcon />,
    hoverColor: '#000000',
    hoverBackground: '#ffffff',
  },
} satisfies Record<string, BadgeProps>;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--space-0_75);
  row-gap: var(--space-0_5);
  margin-block-start: var(--space-0_5);
`;
