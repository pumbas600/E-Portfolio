import BurgerMenu, { NavigationLink } from './BurgerMenu';
import styles from './Header.module.css';

const NavLinks: NavigationLink[] = [
  {
    label: 'Projects',
    link: '/projects',
  },
  {
    label: 'Education',
    link: '/education',
  },
  {
    label: 'Employment',
    link: '/employment',
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavigationLink className={styles.homeLink} href="/">
          Josh
          <br />
          Jeffers
        </NavigationLink>
        <BurgerMenu links={NavLinks} />
      </nav>
    </header>
  );
}
