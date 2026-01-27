import Badge, { BadgeProps } from './Badge';
import styles from './TechnologyBadge.module.css';
import { classes } from '@/utils/classes';

export interface TechnologyBadgeProps extends BadgeProps {
  hoverBackground?: string;
  hoverColor?: string;
}

export default function TechnologyBadge({
  hoverColor,
  hoverBackground,
  className,
  style,
  ...badgeProps
}: TechnologyBadgeProps) {
  return (
    <Badge
      {...badgeProps}
      className={classes(styles.technologyBadge, className)}
      style={{ '--background-color-hover': hoverBackground, '--color-hover': hoverColor, ...style }}
    />
  );
}
