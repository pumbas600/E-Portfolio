import styles from './Metric.module.css';

function formatMetric(metric?: number): string {
  if (metric === undefined) return '-';
  if (metric < 1000) return metric.toString();
  return `${(metric / 1000).toFixed(1)}k`;
}

export interface MetricProps {
  value?: number;
  label: string;
}

export default function Metric({ value, label }: MetricProps) {
  return (
    <p>
      <span className={styles.metric}>{formatMetric(value)}</span>&nbsp;{label}
    </p>
  );
}
