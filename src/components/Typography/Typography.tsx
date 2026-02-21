import { HTMLParagraphProps } from '@/types/props';
import { classes } from '@/utils/classes';
import styles from './Typography.module.css';

export function SecondaryText({ className, ...props }: HTMLParagraphProps) {
  return <p {...props} className={classes(styles.secondaryText, className)} />;
}
