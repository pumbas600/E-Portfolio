'use client';

import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
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

  &:hover {
    text-decoration-color: var(--color);
  }
`;

const PrimaryContrastLink = styled(BaseLink)`
  --color: var(--primary-accent-contrast-text-color);
`;

const SecondaryAccentLink = styled(BaseLink)`
  --color: var(--secondary-accent-color);
`;

const ExternalLinkWrapper = styled(CommonExternalLink)`
  & > .external-anchor {
    margin-bottom: 0;
    transition: margin-bottom 100ms ease-in-out;
  }

  &:hover > .external-anchor {
    margin-bottom: var(--space-0_5);
  }
`;

const ExternalIconLinkWrapper = styled(CommonExternalLink)`
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: translateY(calc(-1 * var(--space-0_25)));
  }
`;

export interface CommonExternalLinkProps extends LinkProps {
  children: React.ReactNode;
  variant?: 'primaryContrast' | 'secondary';
}

function CommonExternalLink({ children, variant = 'primaryContrast', ...props }: CommonExternalLinkProps) {
  const Wrapper = variant === 'primaryContrast' ? PrimaryContrastLink : SecondaryAccentLink;

  return (
    <Wrapper {...props} target="_blank" rel="noreferrer">
      {children}
    </Wrapper>
  );
}

export default function ExteralLink({ children, ...props }: CommonExternalLinkProps) {
  return (
    <ExternalLinkWrapper {...props}>
      {children}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="external-anchor" />
    </ExternalLinkWrapper>
  );
}

export interface ExternalIconLinkProps extends Omit<CommonExternalLinkProps, 'children'> {
  icon: IconProp;
  size: SizeProp;
}

export function ExternalIconLink({ icon, size, ...props }: ExternalIconLinkProps) {
  return (
    <ExternalIconLinkWrapper {...props}>
      <FontAwesomeIcon icon={icon} size={size} />
    </ExternalIconLinkWrapper>
  );
}
