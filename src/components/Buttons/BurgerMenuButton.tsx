import { useState } from 'react';
import styled from 'styled-components';

const MenuButton = styled.button`
  --width: 1.75rem;

  border: none;
  background-color: transparent;
  position: relative;
  padding: var(--space-0_25);
  cursor: pointer;
  color: inherit;

  & > div {
    position: relative;
    width: var(--width);
    height: var(--width);

    & > span {
      height: calc(2 * var(--hairline));
      width: 100%;
      background: currentColor;
      position: absolute;
      transition: all 200ms ease-in-out;
      left: 0;
      top: 50%;

      &:first-child {
        transform: translateY(0.3rem);
      }

      &:last-child {
        transform: translateY(-0.3rem);
      }
    }
  }

  & > div[aria-expanded='true'] > span {
    &:first-child {
      transform: rotate(45deg);
    }

    &:last-child {
      transform: rotate(-45deg);
    }
  }
`;

export default function BurgerMenuButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <MenuButton className="mobile-menu" title="Open navigation menu" onClick={toggleExpanded}>
      <div aria-expanded={isExpanded}>
        <span />
        <span />
      </div>
    </MenuButton>
  );
}
