import AnimatedLink from '../Links/AnimatedLink';
import Badges from '../Badges';
import Card from './index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { generateId } from '../Utils';
import { ReactNode } from 'react';

interface ProjectCardProps {
  wip?: boolean;
  name: string;
  description: ReactNode;
  date: string;
  githubUrl: string;
  technologies: string[];
}

export default function ProjectCard({ wip, name, description, date, githubUrl, technologies }: ProjectCardProps) {
  return (
    <Card className="flex flex-col" id={generateId(name)}>
      <div>
        <div className="flex flex-row justify-between items-baseline dark:text-teal-200 text-sky-600">
          <div className="flex flex-row">
            <AnimatedLink
              href={githubUrl}
              className="font-semi-bold text-2xl"
              colours={{ bg: 'dark:bg-teal-200 bg-sky-600', text: 'inherit' }}
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              {name}
            </AnimatedLink>
            {wip && <div className="ml-0.5 text-xs font-medium">WIP*</div>}
          </div>
          <div className="text-md whitespace-nowrap">{date}</div>
        </div>
        <div className="md:leading-[1.4rem] dark:text-gray-300 text-gray-800 md:my-4 my-3 md:text-base text-sm flex flex-col gap-4">
          {description}
        </div>
      </div>
      <Badges badges={technologies} className="flex-wrap-reverse justify-end" />
    </Card>
  );
}
