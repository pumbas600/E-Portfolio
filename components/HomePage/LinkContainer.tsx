'use client';

import styled from 'styled-components';

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: var(--space-2);
  row-gap: var(--space-0_25);

  @media screen and (max-width: 40rem) {
    flex-direction: column;
    align-items: flex-start;

    & > a {
      display: grid;
      grid-template-columns: 1.1rem auto auto;
    }
  }
`;

export default LinkContainer;
