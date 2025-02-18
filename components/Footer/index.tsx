'use client';

import styled from 'styled-components';
import { BaseHeroContent } from '../Hero/HeroSection';
import { ExternalIconLink } from '../Links/ExternalLink';
import PersonalLinks from '../../data/Links';

const FooterWrapper = styled(BaseHeroContent).attrs({ as: 'footer' })`
  padding-block: var(--space-5);
`;

const AddressContainer = styled.address`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  font-style: normal;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-1_5);
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <AddressContainer>
        <LinkContainer>
          {PersonalLinks.map((link) => (
            <ExternalIconLink key={link.href} href={link.href} icon={link.icon} />
          ))}
        </LinkContainer>
        <p>Copyright {year} Joshua Alex Jeffers</p>
      </AddressContainer>
    </FooterWrapper>
  );
}
