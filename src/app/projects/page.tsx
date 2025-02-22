import GitHubContributionsCard from '@/components/Card/GitHubContributionsCard';
import PortfolioCard from '@/components/Card/PortfolioCard';
import Footer from '@/components/Footer';
import { MainContent } from '@/components/Layout/MainContent';
import MainLayout from '@/components/Layout/MainLayout';

export default function Projects() {
  return (
    <MainLayout>
      <h1>Hi</h1>
      <MainContent>
        <GitHubContributionsCard />
        <PortfolioCard />
      </MainContent>
      <Footer />
    </MainLayout>
  );
}
