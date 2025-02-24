'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../Buttons/IconButton';
import BurgerMenuButton from '../Buttons/BurgerMenuButton';

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

  @media (max-width: 32rem) {
    & > ul {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  font-size: var(--type-1_5);
  text-decoration-color: transparent;
  transition: color 150ms ease-in-out, text-decoration-color 200ms ease-in-out;
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

const NavLinks: HeaderLink[] = [
  {
    label: 'Employment',
    link: '/employment',
  },
  {
    label: 'Projects',
    link: '/projects',
  },
  {
    label: 'Education',
    link: '/education',
  },
];

export default function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <HomeLink href="/">
          Josh
          <br />
          Jeffers
        </HomeLink>
        <BurgerMenuButton />
        <ul>
          {NavLinks.map((link) => (
            <li key={link.link}>
              <StyledLink href={link.link}>{link.label}</StyledLink>
            </li>
          ))}
        </ul>
      </Nav>
    </HeaderWrapper>
  );
}
