import React from "react";

interface INavBarProps {
  links: string[];
  navBarClass?: string;
  listClass?: string;
  itemClass?: string;
}

const NavBar = ({
  links,
  itemClass,
  listClass,
  navBarClass
} : INavBarProps) => {
  return (
    <nav className={navBarClass}>
      <ul className={listClass}>
        {links.map((link, index) => (
          <li key={index} className={itemClass}>
            {link}
          </li>
        ))};
      </ul>
    </nav>
  );
};

export default NavBar;