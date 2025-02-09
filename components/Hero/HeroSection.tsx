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

  @media screen and (max-width: 40rem) {
    font-size: 1rem;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-row-gap: var(--space-4);
  grid-column-start: content-start;
  grid-column-end: content-end;

  align-content: center;
  margin-block-end: 25%;

  @media screen and (max-width: 40rem) {
    margin-block-end: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  line-height: 1.2;

  @media screen and (max-width: 40rem) {
    font-size: 3rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;

  @media screen and (max-width: 40rem) {
    font-size: 1.4rem;
  }
`;
