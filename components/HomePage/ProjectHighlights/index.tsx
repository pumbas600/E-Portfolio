import AnimatedLink from '../../Links/AnimatedLink';
import ProjectCard from '../../Card/ProjectCard';
import Title from '../../Title';
import GitHubContributionsCard from '../../Card/GitHubContributionsCard';

export default function ProjectHighlights() {
	return (
		<section>
			<Title name="Projects" />
			<div className="grid mt-5 lg:grid-cols-2 grid-cols-1 md:gap-8 gap-5 pb-5">
				<GitHubContributionsCard />
				<ProjectCard
					name="Quiz Bot"
					description={
						<div>
							A discord bot I made using{' '}
							<AnimatedLink href={'https://github.com/pumbas600/Halpbot-v1'}>Halpbot</AnimatedLink>, my
							custom annotation-based discord bot framework for JDA. The bot allowed users to quiz
							themselves on CHEMMAT&nbsp;121; a Part I Engineering course. The bot included a vast range
							of questions, answer streaks, leaderboards and helpful explanations. It also consisted of a
							separate{' '}
							<AnimatedLink href="https://github.com/pumbas600/HalpbotDashboard">dashboard</AnimatedLink>{' '}
							built using Spring Boot and Thymeleaf which allowed users to easily add questions to the
							database. According to feedback collected from my peers, users found the bot to be an
							extremely useful and accessible studying mechanism.
							<br />
							<br />
							As of November 2021, there were:
							<ul className="list-disc [&>*]:ml-5">
								<li>
									<b>131</b> unique questions
								</li>
								<li>
									<b>115</b> unique users
								</li>
								<li>
									<b>1,256</b> quizzes started
								</li>
								<li>
									<b>5,088</b> questions answered
								</li>
							</ul>
						</div>
					}
					date="September 2021"
					githubUrl="https://github.com/pumbas600/Halpbot-v1"
					technologies={['jquery', 'thymeleaf', 'springboot', 'javascript', 'java', 'derby']}
				/>
				<ProjectCard
					name="Cornercutter"
					description={
						<div>
							Cornercutter is a desktop application that acts as a modding tool for the game{' '}
							<AnimatedLink href="https://aggrocrab.com/Going-Under">Going Under</AnimatedLink>. It allows
							for complete customisation of skill spawns within the game as persisted mods. These mods can
							be easily shared between users as small strings which others can easily import. From a
							development perspective, the project consists of three different distinct sections:
							<br />
							<br />
							<div className="flex flex-row gap-5">
								<div className="flex flex-col">
									<div>
										1. <b>Frontend</b>
									</div>
									<div>
										2. <b>Backend</b>
									</div>
									<div>
										3. <b>Mod</b>
									</div>
								</div>
								<div className="flex flex-col">
									<div>React, Typescript, Chakra UI, Redux</div>
									<div>Tauri, Rust</div>
									<div>C#</div>
								</div>
							</div>
						</div>
					}
					date="August 2022"
					githubUrl="https://github.com/franomai/cornercutter"
					technologies={['rust', 'react', 'redux', 'typescript', 'c#']}
				/>
				<ProjectCard
					name="Portfolio"
					description={
						<>
							This digital portfolio was created as a way for me to develop my frontend knowledge by
							designing highly reusable React components in Typescript. I leaveraged Next.js to enable
							Static Generation, allowing the HTML to be generated at build time. Tailwindcss was used for
							the styling, allowing me to easily make the website support devices of various sizes and
							dark/light modes.
						</>
					}
					date="November 2021"
					githubUrl="https://github.com/pumbas600/E-Portfolio"
					technologies={['nextjs', 'react', 'typescript', 'tailwindcss']}
				/>
			</div>
		</section>
	);
}
