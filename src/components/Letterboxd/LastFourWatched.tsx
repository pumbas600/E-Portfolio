import { LetterboxdLogEntry } from '../../lib/letterboxdApi';
import LogEntry from './LogEntry';
import styles from './LastFourWatched.module.css';

export interface LastFourWatchedProps {
  logEntries: LetterboxdLogEntry[];
}

export default function LastFourWatched({ logEntries }: LastFourWatchedProps) {
  return (
    <div className={styles.layout}>
      {logEntries.slice(0, 4).map((logEntry) => (
        <LogEntry key={logEntry.link} logEntry={logEntry} />
      ))}
    </div>
  );
}
