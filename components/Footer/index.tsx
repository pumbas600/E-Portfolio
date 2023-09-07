import Links from '../../data/Links';

import { ReactNode } from 'react';
import AnimatedLink from '../Links/AnimatedLink';

export default function Footer() {
	const year = new Date().getFullYear();

	function renderLinks(): ReactNode {
		return Links.map((link) => {
			return (
				<AnimatedLink
					key={link.name}
					href={link.href}
					colours={{ text: 'text-gray-200 dark:text-gray-300', bg: 'bg-gray-200 dark:bg-gray-300' }}
				>
					{link.name}
				</AnimatedLink>
			);
		});
	}

	return (
		<footer className="w-full dark:bg-gradient-to-r dark:from-gray-700 dark:to-slate-600 bg-gray-800 md:py-3 py-2">
			<address className="container flex md:flex-row flex-col-reverse md:justify-between items-center text-base">
				<div className="text-gray-200 dark:text-gray-300">{`Copyright ${year} Joshua Alex Jeffers`}</div>
				<div className="font-semibold md:gap-x-10 gap-x-5 flex flex-row">{renderLinks()}</div>
			</address>
		</footer>
	);
}
