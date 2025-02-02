'use client';

import styled from 'styled-components';

export const HeroSection = styled.div`
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: auto 1fr;
  grid-column-start: 1;
  grid-column-end: -1;

  align-content: center;

  background-color: var(--primary-accent-color);
  color: var(--primary-accent-contrast-text-color);
  height: 100dvh;

  & > * {
    grid-column-start: margin-start;
    grid-column-end: margin-end;
  }
`;

export const HeroContent = styled.div`
  align-content: center;
  margin-block-end: 20%;
`;

export const HeroTitle = styled.h1`
  font-size: 6rem;
  letter-spacing: 0.03em;
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
`;
