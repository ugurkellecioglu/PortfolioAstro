type INavMenuItemProps = {
  href: string;
  children: string;
  target?: string;
};

const NavMenuItem = (props: INavMenuItemProps) => (
  <li className="hover:text-white">
    <a target={props.target} href={props.href}>
      {props.children}
    </a>
  </li>
);

export { NavMenuItem };
