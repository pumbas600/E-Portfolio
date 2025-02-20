import Link from 'next/link';
import { LetterboxdLogEntry } from '../../lib/letterboxdApi';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const LogEntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-0_5);
`;

const LinkWrapper = styled(Link)`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  border-radius: min(4%, var(--space-0_25));
  overflow: hidden;
  border: var(--hairline) solid var(--border-color);

  &:hover {
    border-color: var(--primary-text-color);
    outline: calc(2 * var(--hairline)) solid var(--primary-text-color);
  }
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: var(--space-0_125);
  color: var(--secondary-text-color);
`;

export interface LogEntryProps {
  logEntry: LetterboxdLogEntry;
}

export default function LogEntry({ logEntry }: LogEntryProps) {
  const stars = Math.floor(logEntry.rating ?? 0);
  const hasHalfStar = logEntry.rating !== undefined && logEntry.rating !== stars;

  return (
    <LogEntryWrapper>
      <LinkWrapper href={logEntry.link} target="_blank" rel="noreferrer">
        <Image src={logEntry.imageUrl} alt={`${logEntry.title}'s poster`} fill sizes="(max-width: 45rem) 22vw, 150px" />
      </LinkWrapper>
      <IconWrapper>
        {Array(stars)
          .fill(null)
          .map((_, index) => (
            <FontAwesomeIcon icon={faStar} key={index} size="1x" />
          ))}
        {hasHalfStar && <FontAwesomeIcon icon={faStarHalfStroke} size="1x" />}
        {logEntry.rewatched && <FontAwesomeIcon icon={faRetweet} size="1x" />}
      </IconWrapper>
    </LogEntryWrapper>
  );
}
