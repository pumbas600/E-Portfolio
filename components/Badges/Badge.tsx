'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

const BadgeWrapper = styled.p<{ $hoverBackground?: string; $hoverColor?: string }>`
  background-color: var(--primary-background-color);
  border-radius: 0.25rem;
  padding-inline: 1rem;
  padding-block: 0.5rem;

  align-items: center;
  column-gap: 0.5em;
  display: flex;
  flex-direction: row;

  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;

  &:hover {
    background-color: ${({ $hoverBackground }) => $hoverBackground};
    color: ${({ $hoverColor }) => $hoverColor};
  }

  @media screen and (max-width: 40rem) {
    padding-inline: 0.75rem;
    padding-block: 0.3rem;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export interface BadgeProps {
  icon: ReactNode;
  name: string;
  hoverBackground?: string;
  hoverColor?: string;
}

export default function Badge({ icon, name, hoverColor, hoverBackground }: BadgeProps) {
  return (
    <BadgeWrapper $hoverBackground={hoverBackground} $hoverColor={hoverColor}>
      {icon} {name}
    </BadgeWrapper>
  );
}
