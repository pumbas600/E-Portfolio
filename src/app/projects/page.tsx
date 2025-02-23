import GitHubContributionsCard from '@/components/Card/GitHubContributionsCard';
import PortfolioCard from '@/components/Card/PortfolioCard';
import QuizBotCard from '@/components/Card/QuizBotCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { MainContent } from '@/components/Layout/MainContent';
import MainLayout from '@/components/Layout/MainLayout';

export default function Projects() {
  return (
    <MainLayout>
      <Header />
      <h1>Hi</h1>
      <MainContent>
        <GitHubContributionsCard />
        <PortfolioCard />
        <QuizBotCard />
      </MainContent>
      <Footer />
    </MainLayout>
  );
}
