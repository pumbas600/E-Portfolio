'use client';

import Link from 'next/link';

import { ReactNode } from 'react';

interface LinkBaseProps {
  href: string;
  className?: string;
  children?: ReactNode;
}

export default function LinkBase({ href, className, children }: LinkBaseProps) {
  const isInternal = !href.startsWith('http');
  const isAnchor = href.startsWith('#');

  const smoothScrollToAnchor = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView();
  };

  if (isAnchor) {
    return (
      <a onClick={smoothScrollToAnchor} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link target={isInternal ? undefined : '_blank'} rel="noreferrer" href={href} className={className}>
      {children}
    </Link>
  );
}

export type { LinkBaseProps };
