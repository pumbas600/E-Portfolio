import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry';
import Noise from '../components/Noise';
import Head from 'next/head';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import '../styles/normalize.css';
import '../styles/app.css';

export const metadata: Metadata = {
  title: 'Josh Jeffers',
  description: "Josh Jeffers' digital portfolio",
};

export const viewport: Viewport = {
  themeColor: '#f7ec16', // A slightly darker shade of the primary color to account for the noise.
  colorScheme: 'dark',
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
