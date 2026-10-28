import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface LinkItem {
  name: string;
  href: string;
  icon: IconProp;
}

const PersonalLinks: LinkItem[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/pumbas600',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/josh-jeffers/',
    icon: faLinkedin,
  },
  {
    name: 'joshjeffers600@gmail.com',
    href: 'mailto:joshjeffers600@gmail.com',
    icon: faEnvelope,
  },
];

export default PersonalLinks;
