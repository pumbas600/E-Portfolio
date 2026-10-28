import { NavigationLink } from './BurgerMenu';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavigationLink className={styles.homeLink} href="/">
          Josh
          <br />
          Jeffers
        </NavigationLink>
      </nav>
    </header>
  );
}
