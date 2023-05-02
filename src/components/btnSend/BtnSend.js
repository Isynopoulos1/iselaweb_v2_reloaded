import React from "react";
//IMPORT STYLES

import { BtnContainer } from "../btnSend/BtnSend.styles";

const BtnSend = () => {
  const handleClick = () => {
    console.log("button clicked");
  };
  return <BtnContainer onClick={handleClick}>BtnSend</BtnContainer>;
};

export default BtnSend;
