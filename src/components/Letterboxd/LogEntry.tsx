import Link from 'next/link';
import { LetterboxdLogEntry } from '../../lib/letterboxdApi';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import styles from './LogEntry.module.css';

export interface LogEntryProps {
  logEntry: LetterboxdLogEntry;
}

export default function LogEntry({ logEntry }: LogEntryProps) {
  const stars = Math.floor(logEntry.rating ?? 0);
  const hasHalfStar = logEntry.rating !== undefined && logEntry.rating !== stars;

  return (
    <div className={styles.logEntry}>
      <Link className={styles.link} href={logEntry.link} target="_blank" rel="noreferrer">
        <Image
          src={logEntry.imageUrl}
          alt={`${logEntry.title}’s poster`}
          fill
          sizes="(max-width: 45rem) 22vw, 150px"
        />
      </Link>
      <div className={styles.reactions}>
        {Array(stars)
          .fill(null)
          .map((_, index) => (
            <FontAwesomeIcon className={styles.icon} icon={faStar} key={index} size="1x" />
          ))}
        {hasHalfStar && (
          <FontAwesomeIcon className={styles.icon} icon={faStarHalfStroke} size="1x" />
        )}
        {logEntry.rewatched && (
          <FontAwesomeIcon
            className={styles.icon}
            icon={faRetweet}
            size="1x"
            title="I've watched this before"
          />
        )}
      </div>
    </div>
  );
}
