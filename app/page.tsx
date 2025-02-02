import Header, { HeaderLink } from '../components/Header';
import HeroSection, { HeroSubtitle, HeroTitle } from '../components/Hero/HeroSection';
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
      <Header links={Links} />
      <HeroSection>
        <div>
          <HeroTitle>Josh Jeffers</HeroTitle>
          <HeroSubtitle>Full Stack Software Engineer</HeroSubtitle>
        </div>
      </HeroSection>
      <h3>About Me</h3>
    </MainLayout>
  );
}
