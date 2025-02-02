import Title from '../../Title';
import { Theme } from '../../../pages/v1';
import Card from '../../Card';
import AnimatedLink from '../../Links/AnimatedLink';
import useIsMobile from '../../../hooks/useIsMobile';

interface ContributionsProps {
  theme: Theme;
}

export default function Contributions({ theme }: ContributionsProps) {
  const isMobile = useIsMobile();

  const days = isMobile ? 15 : 30;
  const colour = theme === 'dark' ? '99F6E4' : '0284C7';

  return (
    <section>
      <Title name="Contributions" />
      <Card>
        <img
          className="-ml-1"
          src={`https://github.pumbas.net/api/contributions/pumbas600?days=${days}&colour=${colour}&dotColour=FFFFFF`}
          alt={`My GitHub contributions over the past ${days} days`}
        />
        <div>
          This graph has been dynamically generated from my recent GitHub contributions using my{' '}
          <AnimatedLink href="#github-contributions">GitHub Contributions</AnimatedLink> API.
        </div>
      </Card>
    </section>
  );
}
