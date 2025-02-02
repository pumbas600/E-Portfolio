import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header, { HeaderLink } from '../components/Header';
import { HeroContent, HeroSection, HeroSubtitle, HeroTitle } from '../components/Hero/HeroSection';
import MainLayout from '../components/Layout/MainLayout';
import ExteralLink from '../components/Links/ExternalLink';
import Links from '../data/Links';
import Spaced from '../components/Layout/Spaced';
import { ContentTitle, MainContent } from '../components/Layout/MainContent';
import Link from 'next/link';
import LinkBase from '../components/Links/LinkBase';

const NavLinks: HeaderLink[] = [
  {
    label: 'Employment',
    link: '/employment',
  },
  {
    label: 'Education',
    link: '/education',
  },
];

export default function Home() {
  return (
    <MainLayout>
      <HeroSection>
        <Header links={NavLinks} />
        <HeroContent>
          <div>
            <HeroTitle>Josh Jeffers</HeroTitle>
            <HeroSubtitle>Full Stack Software Engineer</HeroSubtitle>
          </div>
          <Spaced>
            {Links.map((link) => (
              <ExteralLink key={link.href} href={link.href}>
                <FontAwesomeIcon icon={link.icon} />
                {link.name}
              </ExteralLink>
            ))}
          </Spaced>
        </HeroContent>
      </HeroSection>
      <MainContent>
        <ContentTitle>About Me</ContentTitle>
        <p>
          Hi, I'm Josh 👋, a Software Engineer at <LinkBase href="https://letterboxd.com/">Letterboxd</LinkBase> and
          recent University of Auckland graduate.
        </p>
      </MainContent>
    </MainLayout>
  );
}
