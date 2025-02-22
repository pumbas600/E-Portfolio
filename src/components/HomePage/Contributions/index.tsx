'use client';

import useIsMobile from '../../../hooks/useIsMobile';
import Card from '../../Card';
import LinkBase from '../../Links/LinkBase';
import { SecondaryText } from '../../Typography';
import styled from 'styled-components';

const ContributionsGraph = styled.img`
  width: 100%;
  grid-column-start: margin-start;
  grid-column-end: margin-end;

  padding-inline-start: var(--space-2_5);
  padding-inline-end: var(--space-3);
`;

export default function Contributions() {
  const isMobile = useIsMobile();

  const days = isMobile ? 15 : 30;
  const colour = '63fd8b'; // Secondary accent colour

  return (
    <Card>
      <ContributionsGraph
        src={`https://github.pumbas.net/api/contributions/pumbas600?days=${days}&colour=${colour}&dotColour=FFFFFF`}
        alt={`My GitHub contributions over the past ${days} days`}
      />
      <SecondaryText>
        This graph has been dynamically generated from my recent GitHub contributions using my{' '}
        <LinkBase href="#github-contributions">GitHub Contributions API</LinkBase> ✨.
      </SecondaryText>
    </Card>
  );
}
