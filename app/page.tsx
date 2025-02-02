import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header, { HeaderLink } from '../components/Header';
import { HeroContent, HeroSection, HeroSubtitle, HeroTitle } from '../components/Hero/HeroSection';
import MainLayout from '../components/Layout/MainLayout';
import ExteralLink from '../components/Links/ExternalLink';
import Links from '../data/Links';
import Spaced from '../components/Layout/Spaced';
import { ContentTitle, MainContent } from '../components/Layout/MainContent';
import LinkBase from '../components/Links/LinkBase';
import Contributions from '../components/HomePage/Contributions';

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
          Hi, I'm Josh 👋, a software engineer at <LinkBase href="https://letterboxd.com/">Letterboxd</LinkBase> and
          recent University of Auckland graduate.
        </p>
        <p>
          I love building software that provides value to users. This has been the motivation behind a number of my
          personal projects, a selection of which can be seen on my <LinkBase href="/projects">projects page</LinkBase>.
          I'm also obsessed with type safety… static typing for the win!.
        </p>
        <ContentTitle>Contributions</ContentTitle>
        <Contributions />
        <ContentTitle>Project Highlight</ContentTitle>
      </MainContent>
    </MainLayout>
  );
}
