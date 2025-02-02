'use client';

import styled from 'styled-components';

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: subgrid;
  grid-row-gap: 1rem;
  grid-column-start: content-start;
  grid-column-end: content-end;

  padding-block: 8rem;
`;

export const ContentTitle = styled.h2`
  font-weight: 500;
  letter-spacing: 0.02em;
  margin-block-start: 2rem;
  margin-block-end: 0.5rem;
`;
