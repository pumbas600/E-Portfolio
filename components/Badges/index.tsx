'use client';

import styled from 'styled-components';
import Badge from './Badge';

const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.75rem;
  row-gap: 0.5rem;
`;

interface BadgesProps {
  badges: string[];
  className?: string;
}

export default function Badges({ badges, className }: BadgesProps) {
  return (
    <BadgeWrapper>
      {badges.map((name) => (
        <Badge key={name}>{name}</Badge>
      ))}
    </BadgeWrapper>
  );
}
