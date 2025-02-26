'use client';

import styled from 'styled-components';
import BurgerMenu, { NavigationLink } from './BurgerMenu';

const HeaderWrapper = styled.header`
  padding-block: var(--space-1_5);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeLink = styled(NavigationLink)`
  font-size: var(--type-1_25);
  line-height: 1;
  text-transform: uppercase;
`;

const NavLinks: NavigationLink[] = [
  {
    label: 'Projects',
    link: '/projects',
  },
  {
    label: 'Education',
    link: '/education',
  },
  {
    label: 'Employment',
    link: '/employment',
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
        <BurgerMenu links={NavLinks} />
      </Nav>
    </HeaderWrapper>
  );
}
