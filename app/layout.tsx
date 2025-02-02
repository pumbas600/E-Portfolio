import { Metadata } from 'next';
import { ReactNode } from 'react';
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry';
import Noise from '../components/Noise';

import '../styles/normalize.css';
import '../styles/app.css';

export const metadata: Metadata = {
  title: 'Josh Jeffers',
  description: "Josh Jeffers' digital portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
          <Noise />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
