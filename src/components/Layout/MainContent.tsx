'use client';

import styled from 'styled-components';

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: subgrid;
  grid-row-gap: var(--space-2);
  padding-block: var(--space-8);

  & > * {
    grid-column-start: content-start;
    grid-column-end: content-end;
  }
`;

export const ContentTitle = styled.h2`
  margin-block-start: var(--space-2);
  margin-block-end: var(--space-0_25);
`;
