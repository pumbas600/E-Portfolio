import selfie from '../../../assets/Selfie.jpg';
import IconLink from '../../Links/IconLink';
import Links from '../../../data/Links';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

export default function Overview() {
	function renderLinks(): ReactNode {
		return Links.map((link) => {
			return (
				<IconLink key={link.name} href={link.href}>
					<FontAwesomeIcon icon={link.icon} />
				</IconLink>
			);
		});
	}

	return (
		<div className="flex md:flex-row flex-col justify-center items-center mb-5 md:mx-8 mx-2">
			<Image className="md:w-[16rem] md:mb-0 mb-2 w-56 rounded-full" src={selfie} alt="Josh Jeffers" />
			<div className="md:ml-5 flex justify-center flex-col md:items-start items-center">
				<div className="font-bold lg:text-8xl md:text-6xl text-5xl">Josh Jeffers</div>
				<div className="font-semibold md:text-2xl text-base">Fullstack Software Engineering Student</div>
				<div className="mt-1 flex flex-row text-2xl md:justify-start justify-center gap-5">{renderLinks()}</div>
			</div>
		</div>
	);
}
