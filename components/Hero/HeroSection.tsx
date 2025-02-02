'use client';

import styled from 'styled-components';

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: subgrid;
  grid-column-start: 1;
  grid-column-end: -1;

  align-content: center;

  background-color: var(--primary-accent-color);
  color: var(--primary-accent-contrast-text-color);
  height: 100dvh;
  padding-block-end: 3rem;

  & > * {
    grid-column-start: margin-start;
    grid-column-end: margin-end;
  }
`;

export default function HeroSection({ children }: { children: React.ReactNode }) {
  return <HeroWrapper>{children}</HeroWrapper>;
}

export const HeroTitle = styled.h1`
  font-size: 6rem;
  letter-spacing: 0.03em;
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
`;
