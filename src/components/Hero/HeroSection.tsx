'use client';

import styled from 'styled-components';

export const BaseHeroContent = styled.div`
  display: grid;
  grid-template-columns: subgrid;
  grid-column-start: full-start;
  grid-column-end: full-end;

  background: var(--primary-accent-color);
  background: radial-gradient(at left bottom, var(--primary-accent-color), var(--secondary-accent-color));
  color: var(--primary-accent-contrast-text-color);

  & > * {
    grid-column-start: content-start;
    grid-column-end: content-end;
  }
`;

export const HeroSection = styled(BaseHeroContent)`
  grid-template-rows: auto 1fr;
  align-content: center;

  min-height: 75dvh;
  margin-block-end: var(--space-8);

  & > header {
    grid-column-start: margin-start;
    grid-column-end: margin-end;

    @media screen and (max-width: 40rem) {
      grid-column-start: content-start;
      grid-column-end: content-end;
    }
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-row-gap: var(--space-4);
  align-content: center;

  padding-block-start: var(--space-6);
  padding-block-end: var(--space-12);
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  letter-spacing: 0.03em;
  line-height: 1.2;
`;

export const HeroSubtitle = styled.h2`
  font-weight: 600;
  line-height: 1.2;
`;
