import Card from '../../Card';
import LinkBase from '../../Links/LinkBase';
import { SecondaryText } from '../../Typography';
import styles from './Contributions.module.css';

export default function Contributions() {
  const colour = '63fd8b'; // Secondary accent colour

  return (
    <Card>
      <picture>
        <source
          srcSet={`https://github.pumbas.net/api/contributions/pumbas600?days=15&colour=${colour}&dotColour=FFFFFF`}
          media="(width <= 40rem)"
        />
        <img
          src={`https://github.pumbas.net/api/contributions/pumbas600?days=30&colour=${colour}&dotColour=FFFFFF`}
          alt="My recent GitHub contributions"
          className={styles.graph}
          loading="lazy"
        />
      </picture>

      <SecondaryText>
        This graph has been dynamically generated from my recent GitHub contributions using my{' '}
        <LinkBase href="#github-contributions">GitHub Contributions API</LinkBase> ✨.
      </SecondaryText>
    </Card>
  );
}
