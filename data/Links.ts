import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

interface LinkItems {
  name: string;
  href: string;
  icon: IconProp;
}

const Links: LinkItems[] = [
  {
    name: 'Email',
    href: 'mailto:joshjeffers600@gmail.com',
    icon: faEnvelope,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/pumbas600',
    icon: faGithub,
  },
  {
    name: 'Resume',
    href: './JoshJeffersCVPublic.pdf',
    icon: faFilePdf,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/josh-jeffers/',
    icon: faLinkedin,
  },
];

export default Links;
