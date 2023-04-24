import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { MainContainer, MenuContainer } from "./Menu.styles";

//IMPORT COMPONENTS
import AsideMenu from "../aside/AsideMenu";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    return setOpen(!isOpen);
  };
  return (
    <MainContainer>
      <Hamburger toggled={isOpen} toggle={setOpen} onToggle={openMenu} />
      {isOpen && (
        <MenuContainer>
          <AsideMenu />
        </MenuContainer>
      )}
    </MainContainer>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func
};

Menu.defaultProps = {
  isOpen: false,
  setOpen: () => {}
};

export default Menu;
