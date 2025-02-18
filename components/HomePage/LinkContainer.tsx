'use client';

import styled from 'styled-components';

const LinkContainer = styled.address`
  display: flex;
  flex-direction: row;
  font-style: normal;
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
