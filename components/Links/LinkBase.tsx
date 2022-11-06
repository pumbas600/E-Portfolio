import Link from 'next/link';

import { ReactNode } from 'react';

interface LinkBaseProps {
	href: string;
	children?: ReactNode;
}

export default function LinkBase({ href, children }: LinkBaseProps) {
	const isInternal = !href.startsWith('http');

	return (
		<Link target={isInternal ? undefined : '_blank'} rel="noreferrer" href={href} className="inline-block">
			{children}
		</Link>
	);
}

export type { LinkBaseProps };
