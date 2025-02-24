'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

export const BadgeWrapper = styled.p`
  border-radius: 0.25rem;
  padding-inline: var(--space-0_75);
  padding-block: var(--space-0_25);

  align-items: center;
  column-gap: 0.5em;
  display: flex;
  flex-direction: row;

  text-transform: uppercase;
  font-size: var(--type-0_75);
  font-weight: 600;
  letter-spacing: 0.05em;
`;

const PrimaryBadgeWrapper = styled(BadgeWrapper)`
  background-color: var(--primary-accent-color);
  color: var(--primary-accent-contrast-text-color);
  font-weight: 700;
`;

export interface BadgeProps {
  label: string;
  icon?: ReactNode;
  variant?: 'primary';
}

export default function Badge({ label, icon, variant = 'primary' }: BadgeProps) {
  const BadgeComponent = variant === 'primary' ? PrimaryBadgeWrapper : BadgeWrapper;

  return (
    <BadgeComponent>
      {icon} {label}
    </BadgeComponent>
  );
}
