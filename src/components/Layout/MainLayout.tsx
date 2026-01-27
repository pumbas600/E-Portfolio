import { HTMLDivProps, HTMLHeadingProps } from '@/types/props';
import styles from './MainLayout.module.css';
import { classes } from '@/utils/classes';

export function Layout({ className, ...props }: HTMLDivProps) {
  return <main className={classes(styles.layout, className)} {...props} />;
}

export function Content({ className, ...props }: HTMLDivProps) {
  return <div className={classes(styles.content, className)} {...props} />;
}

export function ContentTitle({ className, ...props }: HTMLHeadingProps) {
  return <h2 className={classes(styles.content, className)} {...props} />;
}
