'use client';

import styled from 'styled-components';

const MetricWrapper = styled.span`
  color: var(--secondary-accent-color);
  display: inline-block;
  font-size: var(--type-1_5);
  font-weight: 500;
`;

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
      <MetricWrapper>{formatMetric(value)}</MetricWrapper>&nbsp;{label}
    </p>
  );
}
