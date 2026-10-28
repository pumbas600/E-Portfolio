'use client';

import styled from 'styled-components';
import ExternalLink, { ExternalIconLink } from '../Links/ExternalLink';
import PersonalLinks from '../../data/Links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterWrapper = styled.footer`
  margin-block-start: var(--space-8);
  padding-block: var(--space-4);
  row-gap: var(--space-2);
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-1_5);
`;

const CopyrightText = styled.p`
  font-size: var(--type-1_125);
  color: var(--secondary-text-color);
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <LinkContainer>
        {PersonalLinks.map((link) => (
          <ExternalLink key={link.href} href={link.href}>
            <FontAwesomeIcon icon={link.icon} size="lg" />
            <span>{link.name}</span>
          </ExternalLink>
        ))}
      </LinkContainer>
      <CopyrightText>©{year} Josh Jeffers</CopyrightText>
    </FooterWrapper>
  );
}
