import GitHubContributionsCard from '@/components/Card/GitHubContributionsCard';
import PortfolioCard from '@/components/Card/PortfolioCard';
import QuizBotCard from '@/components/Card/QuizBotCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ContentTitle, MainContent } from '@/components/Layout/MainContent';
import MainLayout from '@/components/Layout/MainLayout';

export default function Projects() {
  return (
    <MainLayout>
      <Header />
      <MainContent>
        <ContentTitle>Projects</ContentTitle>
        <p>A collection of some of the many projects I've worked on over the past few years.</p>
        <GitHubContributionsCard />
        <PortfolioCard />
        <QuizBotCard />
      </MainContent>
      <Footer />
    </MainLayout>
  );
}
