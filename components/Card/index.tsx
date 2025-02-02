'use client';

import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  grid-template-columns: subgrid;
  grid-column-start: margin-start;
  grid-column-end: margin-end;
  grid-row-gap: inherit;

  padding-block: 3.5rem;
  border-radius: 0.5rem;
  background-color: var(--secondary-background-color);
  opacity: 0.9;

  & > * {
    grid-column-start: content-start;
    grid-column-end: content-end;
  }
`;

export default Card;
