import Header, { HeaderLink } from '../components/Header';
import { HeroContent, HeroSection, HeroSubtitle, HeroTitle } from '../components/Hero/HeroSection';
import MainLayout from '../components/Layout/MainLayout';

const Links: HeaderLink[] = [
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
        <Header links={Links} />
        <HeroContent>
          <HeroTitle>Josh Jeffers</HeroTitle>
          <HeroSubtitle>Full Stack Software Engineer</HeroSubtitle>
        </HeroContent>
      </HeroSection>
      <h3>About Me</h3>
    </MainLayout>
  );
}
