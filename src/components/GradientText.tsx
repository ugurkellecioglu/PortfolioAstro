import type { ReactNode } from 'react';

type IGradientTextProps = {
  children: ReactNode;
};

const GradientText = (props: IGradientTextProps) => (
  <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text uppercase text-transparent">
    {props.children}
  </span>
);

export { GradientText };
