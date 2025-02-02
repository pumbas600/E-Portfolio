'use client';

import styled from 'styled-components';
import AnimatedLink from '../Links/AnimatedLink';

const HeaderWrapper = styled.header`
  width: 100%;
  padding-block: 1rem;
  position: fixed;
  top: 0;
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
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.link}>
              <AnimatedLink href={link.link}>{link.label}</AnimatedLink>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderWrapper>
  );
}
