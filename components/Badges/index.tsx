import Badge from './Badge';

interface BadgesProps {
  badges: string[];
  className?: string;
}

export default function Badges({ badges, className }: BadgesProps) {
  function renderBadges() {
    if (badges.length === 0) {
      return <p>There are no technologies used for this project yet.</p>;
    }
    return badges.map((name) => <Badge key={name} name={name} />);
  }

  return <div className={`${className ?? ''} flex flex-row flex-wrap gap-1.5`}>{renderBadges()}</div>;
}
