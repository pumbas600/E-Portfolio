'use client';

import styled from 'styled-components';
import { BadgeProps, BadgeWrapper } from './Badge';

const TechnologyBadgeWrapper = styled(BadgeWrapper)<{ $hoverBackground?: string; $hoverColor?: string }>`
  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  background-color: var(--primary-background-color);
  padding-inline: var(--space-1);
  padding-block: var(--space-0_5);

  &:hover {
    background-color: ${({ $hoverBackground }) => $hoverBackground};
    color: ${({ $hoverColor }) => $hoverColor};
  }
`;

export interface TechnologyBadgeProps extends BadgeProps {
  hoverBackground?: string;
  hoverColor?: string;
}

export default function TechnologyBadge({ icon, label, hoverColor, hoverBackground }: TechnologyBadgeProps) {
  return (
    <TechnologyBadgeWrapper $hoverBackground={hoverBackground} $hoverColor={hoverColor}>
      {icon} {label}
    </TechnologyBadgeWrapper>
  );
}
