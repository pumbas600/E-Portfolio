'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { SmallProfilePictureLink } from '../ProfilePicture';

const HeaderWrapper = styled.header`
  padding-block: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > ul {
    display: flex;
    column-gap: 1.5rem;
    flex-direction: row;
    justify-content: flex-end;

    list-style-type: none;
    padding-inline: 0;
  }
`;

const StyledLink = styled(Link)`
  color: var(--primary-accent-contrast-text-color);
  text-decoration-color: transparent;
  transition: color 150ms ease-in-out, text-decoration-color 200ms ease-in-out;

  &:hover {
    text-decoration-color: var(--primary-accent-contrast-text-color);
  }

  &:active {
    color: var(--primary-accent-contrast-secondary-text-color);
    text-decoration-color: var(--primary-accent-contrast-secondary-text-color);
  }
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
        <Link href="/">
          <SmallProfilePictureLink />
        </Link>
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
