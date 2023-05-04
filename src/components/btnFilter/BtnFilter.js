import React from "react";

//IMPORT STYLES
import { BtnContainer } from "./BtnFilter.styles";

const BtnFilter = ({ tag, handleClick }) => {
  return <BtnContainer onClick={handleClick}>{tag}</BtnContainer>;
};

export default BtnFilter;
