import PersonalLinks from '../../data/Links';
import FooterLink from './FooterLink';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footerLayout}>
      <div className={styles.links}>
        {PersonalLinks.map((link) => (
          <FooterLink key={link.href} href={link.href}>
            {link.name}
          </FooterLink>
        ))}
      </div>
      <div className={styles.copyrightText}>©{year} Josh Jeffers</div>
    </footer>
  );
}
