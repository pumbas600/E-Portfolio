'use client';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

const BaseLink = styled(Link)`
  display: inline-flex;
  column-gap: var(--space-0_5);
  align-items: center;

  color: var(--color);
  text-decoration-color: transparent;
  transition: text-decoration-color 150ms ease-in-out;

  & > .external-anchor {
    margin-bottom: 0;
    transition: margin-bottom 100ms ease-in-out;
  }

  &:hover {
    text-decoration-color: var(--color);

    & > .external-anchor {
      margin-bottom: var(--space-0_5);
    }
  }
`;

const PrimaryContrastLink = styled(BaseLink)`
  --color: var(--primary-accent-contrast-text-color);
`;

const SecondaryAccentLink = styled(BaseLink)`
  --color: var(--secondary-accent-color);
`;

export interface ExternalLinkProps extends LinkProps {
  children: React.ReactNode;
  variant?: 'primaryContrast' | 'secondary';
}

export default function ExteralLink({ children, variant = 'primaryContrast', ...props }: ExternalLinkProps) {
  const Wrapper = variant === 'primaryContrast' ? PrimaryContrastLink : SecondaryAccentLink;

  return (
    <Wrapper {...props} target="_blank" rel="noreferrer">
      {children}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="external-anchor" />
    </Wrapper>
  );
}
