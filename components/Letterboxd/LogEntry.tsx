import Link from 'next/link';
import { LetterboxdLogEntry } from '../../lib/letterboxdApi';
import Image from 'next/image';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  border-radius: min(4%, var(--space-0_25));
  overflow: hidden;
  border: var(--hairline) solid var(--border-color);
`;

export interface LogEntryProps {
  logEntry: LetterboxdLogEntry;
}

export default function LogEntry({ logEntry }: LogEntryProps) {
  return (
    <LinkWrapper href={logEntry.link} target="_blank" rel="noreferrer">
      <Image src={logEntry.imageUrl} alt={`${logEntry.title}'s poster`} fill sizes="(max-width: 45rem) 22vw, 150px" />
    </LinkWrapper>
  );
}
