import GitHubContributionsCard from '@/components/Card/GitHubContributionsCard';
import PortfolioCard from '@/components/Card/PortfolioCard';
import QuizBotCard from '@/components/Card/QuizBotCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Layout, Content, ContentTitle } from '@/components/Layout/MainLayout';

export default function Projects() {
  return (
    <Layout>
      <Header />
      <Content>
        <ContentTitle>Projects</ContentTitle>
        <p>A collection of some of the many projects I've worked on over the past few years.</p>
        <GitHubContributionsCard />
        <PortfolioCard />
        <QuizBotCard />
      </Content>
      <Footer />
    </Layout>
  );
}
