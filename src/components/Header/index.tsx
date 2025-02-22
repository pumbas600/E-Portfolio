'use client';

import styled from 'styled-components';
import Link from 'next/link';

const HeaderWrapper = styled.header`
  padding-block: var(--space-1_5);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > ul {
    display: flex;
    column-gap: var(--space-1_5);
    flex-direction: row;
    justify-content: flex-end;

    list-style-type: none;
    padding-inline: 0;
  }
`;

const StyledLink = styled(Link)`
  color: var(--primary-accent-contrast-text-color);
  font-size: var(--type-1_5);
  text-decoration-color: transparent;
  transition: color 150ms ease-in-out, text-decoration-color 200ms ease-in-out;

  &:hover,
  &:active {
    text-decoration-color: var(--primary-accent-contrast-text-color);
  }
`;

const HomeLink = styled(StyledLink)`
  font-size: var(--type-1_25);
  line-height: 1;
  text-transform: uppercase;
`;

export interface HeaderLink {
  label: string;
  link: string;
}

export interface HeaderProps {
  links: HeaderLink[];
}

export default function Header({ links }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Nav>
        <HomeLink href="/">
          Josh
          <br />
          Jeffers
        </HomeLink>
        <ul>
          {links.map((link) => (
            <li key={link.link}>
              <StyledLink href={link.link}>{link.label}</StyledLink>
            </li>
          ))}
        </ul>
      </Nav>
    </HeaderWrapper>
  );
}
