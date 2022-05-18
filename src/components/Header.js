import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name }) => {
  return (
    <>
      <div className="header xl:px-32">
        <h1 className="text-4xl">{name}</h1>
        <Search />
     
      </div>
      <ThemeIcon/>
    </>
  );
};

export default Header;