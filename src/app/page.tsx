import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header, { HeaderLink } from '@/components/Header';
import { HeroContent, HeroSection, HeroSubtitle, HeroTitle } from '../components/Hero/HeroSection';
import MainLayout from '@/components/Layout/MainLayout';
import ExteralLink from '@/components/Links/ExternalLink';
import PersonalLinks from '@/data/Links';
import LinkContainer from '@/components/HomePage/LinkContainer';
import { ContentTitle, MainContent } from '@/components/Layout/MainContent';
import LinkBase from '@/components/Links/LinkBase';
import Contributions from '@/components/HomePage/Contributions';
import GitHubContributionsCard from '@/components/Card/GitHubContributionsCard';
import Footer from '@/components/Footer';
import { fetchLastWatched } from '@/lib/letterboxdApi';
import LastFourWatched from '@/components/Letterboxd/LastFourWatched';

export const revalidate = 60 * 60 * 5; // Regenerate page every 5 hours.

const NavLinks: HeaderLink[] = [
  {
    label: 'Employment',
    link: '/employment',
  },
  {
    label: 'Projects',
    link: '/projects',
  },
  {
    label: 'Education',
    link: '/education',
  },
];

export default async function Home() {
  const logEntries = await fetchLastWatched();

  return (
    <MainLayout>
      <HeroSection>
        <Header links={NavLinks} />
        <HeroContent>
          <div>
            <HeroTitle>Josh Jeffers</HeroTitle>
            <HeroSubtitle>Full Stack Software Engineer</HeroSubtitle>
          </div>
          <LinkContainer>
            {PersonalLinks.map((link) => (
              <ExteralLink key={link.href} href={link.href}>
                <FontAwesomeIcon icon={link.icon} />
                {link.name}
              </ExteralLink>
            ))}
          </LinkContainer>
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
          I'm also obsessed with type safety… static typing for the win!
        </p>
        <p>
          When I'm not coding, I enjoy watching movies, playing video games, and reading books. Check out my last four
          watched movies below, or my profile on{' '}
          <LinkBase href="https://letterboxd.com/pumbas600/">Letterboxd</LinkBase>!
        </p>
        <LastFourWatched logEntries={logEntries} />
        <ContentTitle>Contributions</ContentTitle>
        <Contributions />
        <ContentTitle>Project Highlight</ContentTitle>
        <GitHubContributionsCard />
      </MainContent>
      <Footer />
    </MainLayout>
  );
}
