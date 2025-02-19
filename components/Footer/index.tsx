'use client';

import styled from 'styled-components';
import { BaseHeroContent } from '../Hero/HeroSection';
import { ExternalIconLink } from '../Links/ExternalLink';
import PersonalLinks from '../../data/Links';

const FooterWrapper = styled(BaseHeroContent).attrs({ as: 'footer' })`
  padding-block: var(--space-4);
  row-gap: var(--space-2);
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-1_5);
`;

const Divider = styled.hr`
  border-style: dotted;
  border-block-start: var(--hairline);
  grid-column-start: margin-start;
  grid-column-end: margin-end;
`;

const CopyrightText = styled.p`
  font-size: var(--type-1_125);
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <LinkContainer>
        {PersonalLinks.map((link) => (
          <ExternalIconLink key={link.href} href={link.href} icon={link.icon} size="lg" />
        ))}
      </LinkContainer>
      <Divider />
      <CopyrightText>©{year} Joshua Alex Jeffers</CopyrightText>
    </FooterWrapper>
  );
}
