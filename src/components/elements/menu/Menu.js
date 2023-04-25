import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

//IMPORT STYLES
import { MainContainer } from "./Menu.styles";

//IMPORT COMPONENTS
import AsideMenu from "../aside/AsideMenu";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    return setOpen(!isOpen);
  };
  return (
    <MainContainer>
      <Hamburger toggled={isOpen} toggle={setOpen} onToggle={toggleMenu} />
      {isOpen && <AsideMenu toggleMenu={toggleMenu} />}
    </MainContainer>
  );
};

export default Menu;
