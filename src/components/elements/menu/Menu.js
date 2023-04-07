import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

//IMPORT STYLES
import { MenuContainer } from "./Menu.styles";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <MenuContainer>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        onToggle={toggled => {
          if (toggled) {
          } else {
            // close a menu
          }
        }}
        // open a menu
      />
      <h3> El menu esta: {isOpen ? "cerrado" : "abierto"}</h3>
      <button onClick={Hamburger}> {openMenu}</button>
    </MenuContainer>
  );
};

export default Menu;
