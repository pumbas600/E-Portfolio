'use client';

import styled from 'styled-components';

const NoiseContainer = styled.div`
  pointer-events: none;
  z-index: 10;
  inset: 0;
  position: fixed;
`;

const NoiseFilter = styled.div`
  width: 100%;
  height: 100%;
  background-size: 128px;
  background-repeat: repeat;
  background-image: url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png');
  opacity: 0.05;
`;

export default function Noise() {
  return (
    <NoiseContainer>
      <NoiseFilter />
    </NoiseContainer>
  );
}
