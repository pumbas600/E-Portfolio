import { HTMLDivProps, HTMLHeadingProps } from '@/types/props';
import styles from './HeroSection.module.css';
import { classes } from '@/utils/classes';

export function HeroSection({ className, ...props }: HTMLDivProps) {
  return <section className={classes(styles.heroSection, className)} {...props} data-layout="fullbleed" />;
}

export function HeroContent({ className, ...props }: HTMLDivProps) {
  return <div className={classes(styles.heroContent, className)} {...props} />;
}

export function HeroTitle({ className, ...props }: HTMLHeadingProps) {
  return <h1 className={classes(styles.heroTitle, className)} {...props} />;
}

export function HeroSubtitle({ className, ...props }: HTMLHeadingProps) {
  return <h2 className={classes(styles.heroSubtitle, className)} {...props} />;
}
