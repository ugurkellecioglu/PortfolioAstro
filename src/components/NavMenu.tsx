import type { ReactNode } from 'react';

type INavMenuProps = {
  children: ReactNode;
};

const NavMenu = (props: INavMenuProps) => (
  <nav>
    <ul className="flex justify-around gap-x-8 text-xl font-bold text-gray-200  sm:justify-evenly sm:text-base sm:font-normal   ">
      {props.children}
    </ul>
  </nav>
);

export { NavMenu };
