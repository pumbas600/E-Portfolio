'use client';

import styled from 'styled-components';
import { LetterboxdLogEntry } from '../../lib/letterboxdApi';
import LogEntry from './LogEntry';

const LastFourWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2%;
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
