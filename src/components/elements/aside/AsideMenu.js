import React from "react";
import { Link } from "react-router-dom";

//IMPORT STYLES
import { AsideContainer, MenuOptions } from "../aside/AsideMenu.styles";

const AsideMenu = () => {
  const categories = [
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/works", label: "Works" }
  ];

  return (
    <AsideContainer>
      <MenuOptions>
        {categories.map((category, index) => (
          <Link to={category.path} key={index}>
            {category.label}
          </Link>
        ))}
      </MenuOptions>
    </AsideContainer>
  );
};

export default AsideMenu;
