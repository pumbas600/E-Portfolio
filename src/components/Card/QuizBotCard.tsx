'use client';

import { Badges } from '../Badges';
import LinkBase from '../Links/LinkBase';
import Metric from '../Metric';
import ProjectCard from './ProjectCard';

export default function QuizBotCard() {
  return (
    <ProjectCard
      name="Quiz Bot"
      description={
        <>
          <p>
            A discord bot I made using <LinkBase href={'https://github.com/pumbas600/Halpbot-v1'}>Halpbot</LinkBase>, my
            custom annotation-based discord bot framework for JDA. The bot allowed users to quiz themselves on
            CHEMMAT&nbsp;121; a Part&nbsp;I Engineering course. The bot included a vast range of questions, answer
            streaks, leaderboards and helpful explanations. It also consisted of a separate{' '}
            <LinkBase href="https://github.com/pumbas600/HalpbotDashboard">dashboard</LinkBase> built using Spring Boot
            and Thymeleaf which allowed users to easily add questions to the database. According to feedback collected
            from users, they found the bot to be an extremely useful and accessible studying mechanism.
          </p>
          <p>As of November 2021, there were:</p>
          <div>
            <Metric value={131} label="unique questions." />
            <Metric value={115} label="unique users." />
            <Metric value={1_256} label="quizzes started." />
            <Metric value={5_088} label="questions answered." />
          </div>
        </>
      }
      date="September 2021"
      githubUrl="https://github.com/pumbas600/Halpbot-v1"
      technologies={[Badges.Java, Badges.SprintBoot, Badges.Thymeleaf, Badges.JavaScript, Badges.Derby]}
    />
  );
}
