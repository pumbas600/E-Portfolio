'use client';

import useIsMobile from '../../../hooks/useIsMobile';
import Card from '../../Card';
import LinkBase from '../../Links/LinkBase';
import { SecondaryText } from '../../Typography';
import styled from 'styled-components';

const ContributionsGraph = styled.img`
  grid-column-start: margin-start;
  grid-column-end: margin-end;

  padding-inline-start: 2.5rem;
  padding-inline-end: 3rem;

  @media screen and (max-width: 40rem) {
    padding-inline-start: 1.25rem;
    padding-inline-end: 1.75rem;
  }
`;

export default function Contributions() {
  const isMobile = useIsMobile();

  const days = isMobile ? 15 : 30;
  const colour = '31a6fa';

  return (
    <Card>
      <ContributionsGraph
        src={`https://github.pumbas.net/api/contributions/pumbas600?days=${days}&colour=${colour}&dotColour=FFFFFF`}
        alt={`My GitHub contributions over the past ${days} days`}
      />
      <SecondaryText>
        This graph has been dynamically generated from my recent GitHub contributions using my{' '}
        <LinkBase href="/projects#github-contributions">GitHub Contributions API</LinkBase> ✨.
      </SecondaryText>
    </Card>
  );
}
