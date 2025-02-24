import { useState } from 'react';
import styled from 'styled-components';

const MenuButton = styled.button`
  --width: 2.85rem;

  border: var(--hairline) solid var(--border-color);
  background-color: transparent;
  position: relative;
  width: var(--width);
  height: var(--width);

  & > span {
    --line-width: calc(0.6 * var(--width));
    --offset: calc((var(--width) - var(--line-width)) / 2);

    display: block;
    position: absolute;
    height: var(--hairline);
    left: var(--offset);
    width: var(--line-width);
    background: #ffffff;
    transition: all 200ms ease;
    transform: rotate(0deg);
  }

  & > span:first-child {
    top: 0.85rem;
  }

  & > span:last-child {
    bottom: 0.85rem;
  }

  &[aria-expanded='true'] span {
    top: initial;
    bottom: initial;
  }

  &[aria-expanded='true'] > span:first-child {
    transform: rotate(45deg);
  }

  &[aria-expanded='true'] > span:last-child {
    transform: rotate(-45deg);
  }
`;

export default function BurgerMenuButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <MenuButton
      className="mobile-menu"
      title="Open navigation menu"
      aria-expanded={isExpanded}
      onClick={toggleExpanded}
    >
      <span />
      <span />
    </MenuButton>
  );
}
