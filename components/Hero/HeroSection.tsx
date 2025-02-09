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
  height: 100lvh;

  & > header {
    grid-column-start: margin-start;
    grid-column-end: margin-end;
  }

  & > * {
    grid-column-start: content-start;
    grid-column-end: content-end;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-row-gap: var(--space-4);

  align-content: center;
  margin-block-end: 25%;

  @media screen and (max-width: 40rem) {
    margin-block-end: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  letter-spacing: 0.03em;
  line-height: 1.2;
`;

export const HeroSubtitle = styled.h2`
  font-weight: 600;
`;
