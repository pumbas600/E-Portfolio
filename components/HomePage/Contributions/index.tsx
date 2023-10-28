import Title from '../../Title';
import { Theme } from '../../../pages';
import Card from '../../Card';
import AnimatedLink from '../../Links/AnimatedLink';
import useIsMobile from '../../../hooks/useIsMobile';
import { useMemo } from 'react';

interface ContributionsProps {
  theme: Theme;
}

interface ApiOptions {
  width: number;
  height: number;
  days: number;
}

export default function Contributions({ theme }: ContributionsProps) {
  const isMobile = useIsMobile();

  const { width, height, days } = useMemo<ApiOptions>(() => {
    if (isMobile) {
      return { width: 600, height: 400, days: 15 };
    }
    return { width: 1000, height: 400, days: 30 };
  }, [isMobile]);

  const colour = theme === 'dark' ? '99F6E4' : '0284C7';

  return (
    <section>
      <Title name="Contributions" />
      <Card>
        <img
          className="-ml-1"
          width={width}
          height={height}
          src={`https://github.pumbas.net/api/contributions/pumbas600?width=${width}&height=${height}&days=${days}&colour=${colour}&dotColour=FFFFFF`}
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
