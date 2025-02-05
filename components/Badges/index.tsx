'use client';

import styled from 'styled-components';
import { BadgeProps } from './Badge';
import TypeScriptIcon from '../Icons/TypeScriptIcon';
import NextJsIcon from '../Icons/NextJsIcon';

export const Badges = {
  TypeScript: {
    name: 'TypeScript',
    icon: <TypeScriptIcon />,
    hoverColor: '#007ACC',
  },
  NextJs: {
    name: 'Next.js',
    icon: <NextJsIcon />,
    hoverColor: '#000000',
  },
} satisfies Record<string, BadgeProps>;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.75rem;
  row-gap: 0.5rem;
`;
