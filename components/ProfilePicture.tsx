'use client';

import Image from 'next/image';
import styled from 'styled-components';
import selfie from '../assets/Selfie.jpg';

export const BaseProfilePicture = styled(Image)`
  border-radius: 50%;
  filter: grayscale(70%);
`;

const BaseProfilePictureLink = styled(BaseProfilePicture)`
  transition: filter 150ms ease-in-out;

  &:hover {
    filter: grayscale(10%);
  }
`;

export function SmallProfilePictureLink() {
  return <BaseProfilePictureLink src={selfie} alt="Josh Jeffers" width={40} height={40} />;
}
