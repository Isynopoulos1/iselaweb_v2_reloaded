import React from "react";
import { Link } from "react-router-dom";
//IMPORT STYLES
import { AsideContainer, MenuOptions, Work, About, Contact } from "../aside/AsideMenu.styles";

const AsideMenu = () => {
  //DATA

  const categories = [
    { path: "/about", label: "menu.about" },
    { path: "/contact", label: "menu.contact" },
    { path: "/works", label: "menu.works" }
  ];
  return (
    <AsideContainer>
      <MenuOptions>
        <Work>Work</Work>
        <About>About</About>
        <Contact>Contact</Contact>
      </MenuOptions>
    </AsideContainer>
  );
};

export default AsideMenu;
