import LinkBase from './LinkBase';

import AnimatedUnderline, { AnimatedUnderlineProps } from '../AnimatedUnderline';

interface AnimatedLinkProps extends AnimatedUnderlineProps {
  href: string;
}

export default function AnimatedLink({ href, children, ...animatedUnderlineProps }: AnimatedLinkProps) {
  return (
    <AnimatedUnderline {...animatedUnderlineProps}>
      <LinkBase href={href}>{children}</LinkBase>
    </AnimatedUnderline>
  );
}
