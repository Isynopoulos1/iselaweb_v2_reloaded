import React from "react";

//IMPORT STYLES
import { BtnContainer } from "./BtnFilter.styles";

const BtnFilter = ({ tag }) => {
  return <BtnContainer>{tag}</BtnContainer>;
};

export default BtnFilter;
