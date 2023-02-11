type INavMenuItemProps = {
  href: string;
  children: string;
  target?: string;
};

const NavMenuItem = (props: INavMenuItemProps) => (
  <li className="hover:text-slate-600">
    <a target={props.target} href={props.href}>
      {props.children}
    </a>
  </li>
);

export { NavMenuItem };
