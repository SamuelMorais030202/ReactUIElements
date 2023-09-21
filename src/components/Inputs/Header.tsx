import React from "react";

interface IHeaderProps {
  title: string;
  headerClass?: string;
  titleClass?: string;
}

const Header = ({ title, headerClass, titleClass } : IHeaderProps) => {
  return (
    <header className={headerClass}>
      <h1 className={titleClass}>{ title }</h1>
    </header>
  );
}

export default Header;