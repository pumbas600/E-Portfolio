import { classes } from '@/utils/classes';
import { ReactNode } from 'react';
import styles from './Badge.module.css';
import { HTMLDivProps } from '@/types/props';

export interface BadgeProps extends HTMLDivProps {
  label: string;
  icon?: ReactNode;
  variant?: 'primary';
}

export default function Badge({ label, icon, variant, className, ...props }: BadgeProps) {
  return (
    <div
      className={classes(styles.badge, className, variant === 'primary' && styles['-primary'])}
      {...props}
    >
      {icon} <span>{label}</span>
    </div>
  );
}
