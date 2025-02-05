'use client';

import styled from 'styled-components';
import { BadgeProps } from './Badge';
import TypeScriptIcon from '../Icons/TypeScriptIcon';
import NextJsIcon from '../Icons/NextJsIcon';
import ReactIcon from '../Icons/ReactIcon';
import FirestoreIcon from '../Icons/FirestoreIcon';
import OracleIcon from '../Icons/OracleIcon';

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
} satisfies Record<string, BadgeProps>;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.75rem;
  row-gap: 0.5rem;
`;
