import Link from 'next/link';
import styles from './FooterLink.module.css';

export interface FooterLinkProps {
  href: string;
  children?: React.ReactNode;
}

export default function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link href={href} className={styles.footerLink} target="_blank" rel="noreferrer external">
      <span>{children}</span>
    </Link>
  );
}
