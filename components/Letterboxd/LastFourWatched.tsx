'use client';

import styled from 'styled-components';
import { LetterboxdLogEntry } from '../../lib/letterboxdApi';
import LogEntry from './LogEntry';

const LastFourWrapper = styled.div`
  display: flex;
  row-gap: var(--space-0_5);
  column-gap: var(--space-0_5);
  justify-content: space-between;
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
