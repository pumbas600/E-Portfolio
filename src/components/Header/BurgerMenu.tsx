import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const MenuButton = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  position: relative;
  padding: var(--space-0_25);
  cursor: pointer;
  color: inherit;
  z-index: 1;

  &:hover {
    opacity: 80%;
  }

  &[aria-expanded='true'] > div > span {
    &:first-child {
      transform: rotate(45deg);
    }

    &:last-child {
      transform: rotate(-45deg);
    }
  }
`;

const Wrapper = styled.div`
  & > .overlay,
  & > .mobile-menu {
    display: none;
  }

  & > ul {
    display: flex;
    column-gap: var(--space-1_5);
    flex-direction: row;
    justify-content: flex-end;

    list-style-type: none;
    padding-inline: 0;
  }

  @media (max-width: 32rem) {
    & > .mobile-menu {
      display: block;
    }

    & > ul {
      display: none;
    }

    & > .mobile-menu[aria-expanded='true'] ~ ul {
      inset: 0;
      padding-block: calc(2 * var(--space-8));
      padding-inline: var(--space-2);
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
      row-gap: var(--space-1);
      backdrop-filter: blur(8px);
      background-color: rgb(0 0 0 / 40%);

      & > li > a {
        font-size: var(--type-2);
      }
    }
  }
`;

const BurgerMenuContainer = styled.div`
  --width: 1.7rem;
  position: relative;
  width: var(--width);
  height: var(--width);
`;

const BurgerLine = styled.span`
  height: calc(2 * var(--hairline));
  width: 100%;
  background: currentColor;
  position: absolute;
  transition: all 150ms ease-in-out;
  left: 0;
  top: 50%;

  &:first-child {
    transform: translateY(0.3rem);
  }

  &:last-child {
    transform: translateY(-0.3rem);
  }
`;

export const NavigationLink = styled(Link)`
  color: inherit;
  font-size: var(--type-1_5);
  text-decoration-color: transparent;
  transition: color 150ms ease-in-out, text-decoration-color 200ms ease-in-out;
`;

export interface NavigationLink {
  label: string;
  link: string;
}

export interface BurgerMenuProps {
  links: NavigationLink[];
}

export default function BurgerMenu({ links }: BurgerMenuProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <Wrapper>
      <MenuButton
        className="mobile-menu"
        title="Open navigation menu"
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
      >
        <BurgerMenuContainer>
          <BurgerLine />
          <BurgerLine />
        </BurgerMenuContainer>
      </MenuButton>
      <ul>
        {links.map((link) => (
          <li key={link.link}>
            <NavigationLink href={link.link}>{link.label}</NavigationLink>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
