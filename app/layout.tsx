import { Metadata } from 'next';
import { ReactNode } from 'react';
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry';
import '../styles/app.scss';
import Noise from '../components/Noise';
import MainLayout from '../components/Layout/MainLayout';

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
          <MainLayout>{children}</MainLayout>
          <Noise />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
