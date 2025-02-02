import styled from 'styled-components';

export const SecondaryText = styled.p`
  color: var(--secondary-text-color);
  font-size: 1.1rem;

  @media screen and (max-width: 40rem) {
    font-size: 0.85rem;
  }
`;
