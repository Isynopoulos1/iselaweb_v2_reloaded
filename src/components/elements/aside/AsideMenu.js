import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//IMPORT STYLES
import { AsideContainer, MenuOptions } from "../aside/AsideMenu.styles";

const AsideMenu = ({ toggleMenu }) => {
  const categories = [
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/works", label: "Works" }
  ];

  return (
    <AsideContainer>
      <MenuOptions>
        {categories.map((category, index) => (
          <Link onClick={toggleMenu} to={category.path} key={index}>
            {category.label}
          </Link>
        ))}
      </MenuOptions>
    </AsideContainer>
  );
};

AsideMenu.propTypes = {
  toggleMenu: PropTypes.func
};

AsideMenu.defaultProps = {
  toggleMenu: () => {}
};

export default AsideMenu;
