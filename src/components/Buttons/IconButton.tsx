import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IconButtonProps {
  icon: IconProp;
  label: string;
  className?: string;
}

export default function IconButton({ icon, label, className }: IconButtonProps) {
  return (
    <button title={label} className={className}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
