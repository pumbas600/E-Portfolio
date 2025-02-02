'use client';

import AnimatedLink from '../Links/AnimatedLink';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Theme } from '../../pages/v1';
import { useMemo } from 'react';

interface HeaderProps {
  toggleTheme: VoidFunction;
  currentTheme: Theme;
  sections: [string, string][];
}

export default function Header({ toggleTheme, currentTheme, sections }: HeaderProps) {
  const themeIcon = useMemo(() => {
    return currentTheme === 'dark' ? faMoon : faSun;
  }, [currentTheme]);

  function renderLinks() {
    return sections.map((section) => {
      const [name, link] = section;
      return (
        <AnimatedLink
          key={name}
          href={`#${link}`}
          colours={{ text: 'text-gray-800 dark:text-gray-200', bg: 'bg-gray-800 dark:bg-gray-200' }}
        >
          {name}
        </AnimatedLink>
      );
    });
  }

  return (
    <nav className="w-full md:pb-1 md:pt-5 py-2">
      <div className="flex flex-row justify-between container items-center text-lg font-semibold text-gray-800 dark:text-gray-200">
        <div onClick={() => toggleTheme()} className="md:ml-0 ml-3 cursor-pointer">
          <FontAwesomeIcon icon={themeIcon} />
        </div>
        <div className="md:flex hidden flex-row gap-10">{renderLinks()}</div>
      </div>
    </nav>
  );
}
