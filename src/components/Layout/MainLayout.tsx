import { HTMLDivProps, HTMLHeadingProps } from '@/types/props';
import styles from './MainLayout.module.css';
import { classes } from '@/utils/classes';

export function Layout({ className, ...props }: HTMLDivProps) {
  return <main className={classes(styles.layout, 'block-space', className)} {...props} />;
}

export function ContentTitle({ className, ...props }: HTMLHeadingProps) {
  return <h2 className={classes(styles.contentTitle, className)} {...props} />;
}
