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
  > .external-anchor > .icon {
    opacity: 0.9;
    transition: all 100ms ease-in-out;
  }

  &:hover > .external-anchor > .icon {
    opacity: 1;
    transform: translate(var(--space-0_125), calc(-1 * var(--space-0_125)));
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
    <Wrapper {...props} target="_blank" rel="noreferrer external">
      {children}
    </Wrapper>
  );
}

export default function ExteralLink({ children, ...props }: CommonExternalLinkProps) {
  return (
    <ExternalLinkWrapper {...props}>
      {children}
      <span className="external-anchor">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="icon" />
      </span>
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
