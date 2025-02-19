'use client';

import styled from 'styled-components';
import { LetterboxdLogEntry } from '../../lib/letterboxdApi';
import LogEntry from './LogEntry';

const LastFourWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: var(--space-0_5);
  grid-column-gap: var(--space-1);

  @media screen and (max-width: 25rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export interface LastFourWatchedProps {
  logEntries: LetterboxdLogEntry[];
}

export default function LastFourWatched({ logEntries }: LastFourWatchedProps) {
  return (
    <LastFourWrapper>
      {logEntries.slice(0, 4).map((logEntry) => (
        <LogEntry key={logEntry.link} logEntry={logEntry} />
      ))}
    </LastFourWrapper>
  );
}
