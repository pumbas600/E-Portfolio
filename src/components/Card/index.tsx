import { HTMLDivProps } from '@/types/props';
import { classes } from '@/utils/classes';
import styles from './Card.module.css';

export default function Card({ className, ...props }: HTMLDivProps) {
  return <article className={classes(styles.card, 'block-space', className)} {...props} data-layout="wide" />;
}
