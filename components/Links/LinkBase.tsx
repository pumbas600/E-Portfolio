import Link from 'next/link';

import { ReactNode } from 'react';

interface LinkBaseProps {
	href: string;
	children?: ReactNode;
}

export default function LinkBase({ href, children }: LinkBaseProps) {
	const isInternal = !href.startsWith('http');
	const isAnchor = href.startsWith('#');

	function smoothScrollToAnchor() {
		const element = document.getElementById(href.substring(1));
		element?.scrollIntoView();
	}

	if (isAnchor) {
		return <div onClick={smoothScrollToAnchor}>{children}</div>;
	}

	return (
		<Link target={isInternal ? undefined : '_blank'} rel="noreferrer" href={href} className="inline-block">
			{children}
		</Link>
	);
}

export type { LinkBaseProps };
