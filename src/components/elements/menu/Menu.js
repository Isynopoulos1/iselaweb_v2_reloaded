import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

//IMPORT STYLES
import { MenuContainer } from "./Menu.styles";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    return setOpen(!isOpen);
  };
  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} onToggle={openMenu} />
      {isOpen && <MenuContainer> </MenuContainer>}
    </>
  );
};

export default Menu;
