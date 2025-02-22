import AnimatedLink from '../../Links/AnimatedLink';
import ProjectCard from '../../Card/ProjectCard';
import Title from '../../Title';
import GitHubContributionsCard from '../../Card/GitHubContributionsCard';

export default function ProjectHighlights() {
  return (
    <section>
      <Title name="Projects" />
      <div className="grid mt-5 lg:grid-cols-2 grid-cols-1 md:gap-8 gap-5">
        <GitHubContributionsCard />
        <ProjectCard
          name="Quiz Bot"
          description={
            <>
              <div>
                A discord bot I made using{' '}
                <AnimatedLink href={'https://github.com/pumbas600/Halpbot-v1'}>Halpbot</AnimatedLink>, my custom
                annotation-based discord bot framework for JDA. The bot allowed users to quiz themselves on
                CHEMMAT&nbsp;121; a Part&nbsp;I Engineering course. The bot included a vast range of questions, answer
                streaks, leaderboards and helpful explanations. It also consisted of a separate{' '}
                <AnimatedLink href="https://github.com/pumbas600/HalpbotDashboard">dashboard</AnimatedLink> built using
                Spring Boot and Thymeleaf which allowed users to easily add questions to the database. According to
                feedback collected from my peers, users found the bot to be an extremely useful and accessible studying
                mechanism.
              </div>
              <div>
                As of November 2021, there were:
                <ul className="list-disc [&>*]:ml-5">
                  <li>
                    <b>131</b> unique questions.
                  </li>
                  <li>
                    <b>115</b> unique users.
                  </li>
                  <li>
                    <b>1,256</b> quizzes started.
                  </li>
                  <li>
                    <b>5,088</b> questions answered.
                  </li>
                </ul>
              </div>
            </>
          }
          date="September 2021"
          githubUrl="https://github.com/pumbas600/Halpbot-v1"
          technologies={[]}
        />
        <ProjectCard
          name="Cornercutter"
          description={
            <>
              <div>
                Cornercutter is a desktop application that acts as a modding tool for the game{' '}
                <AnimatedLink href="https://aggrocrab.com/Going-Under">Going Under</AnimatedLink>. It allows for
                complete customisation of skill spawns within the game as persisted mods. These mods can be easily
                shared between users as small strings which others can easily import. From a development perspective,
                the project consists of three different distinct sections:
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>
                      <b>Frontend</b>
                    </td>
                    <td>React, TypeScript, Chakra UI, Redux.</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>
                      <b>Backend</b>
                    </td>
                    <td>Tauri, Rust.</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>
                      <b>Mod</b>
                    </td>
                    <td>C#.</td>
                  </tr>
                </tbody>
              </table>
            </>
          }
          date="August 2022"
          githubUrl="https://github.com/franomai/cornercutter"
          technologies={[]}
        />
        <ProjectCard
          name="Portfolio"
          description={
            <>
              This digital portfolio was created as a way for me to develop my frontend knowledge by designing highly
              reusable React components in TypeScript. I leaveraged Next.JS to enable Static Generation, allowing the
              HTML to be generated at build time. Tailwind&nbsp;CSS was used for the styling, allowing me to easily make
              the website support devices of various sizes and dark/light modes.
            </>
          }
          date="November 2021"
          githubUrl="https://github.com/pumbas600/E-Portfolio"
          technologies={[]}
        />
      </div>
    </section>
  );
}
