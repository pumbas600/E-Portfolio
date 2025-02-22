'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

const BadgeWrapper = styled.p<{ $hoverBackground?: string; $hoverColor?: string }>`
  background-color: var(--primary-background-color);
  border-radius: 0.25rem;
  padding-inline: var(--space-1);
  padding-block: var(--space-0_5);

  align-items: center;
  column-gap: 0.5em;
  display: flex;
  flex-direction: row;

  text-transform: uppercase;
  font-size: var(--type-0_75);
  font-weight: 600;
  letter-spacing: 0.05em;

  &:hover {
    background-color: ${({ $hoverBackground }) => $hoverBackground};
    color: ${({ $hoverColor }) => $hoverColor};
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
