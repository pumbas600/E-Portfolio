'use client';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

const PrimaryContrastLink = styled(Link)`
  display: inline-flex;
  column-gap: 0.5rem;
  align-items: center;

  color: var(--primary-accent-contrast-text-color);
  text-decoration-color: transparent;
  transition: text-decoration-color 150ms ease-in-out;

  & > .external-anchor {
    margin-bottom: 0;
    transition: margin-bottom 100ms ease-in-out;
  }

  &:hover {
    text-decoration-color: var(--primary-accent-contrast-text-color);

    > .external-anchor {
      margin-bottom: 0.5rem;
    }
  }
`;

export interface ExternalLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function ExteralLink({ children, ...props }: ExternalLinkProps) {
  return (
    <PrimaryContrastLink {...props} target="_blank" rel="noreferrer">
      {children}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="external-anchor" />
    </PrimaryContrastLink>
  );
}
