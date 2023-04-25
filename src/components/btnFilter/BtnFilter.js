import React from "react";

//IMPORT STYLES
import { BtnContainer } from "./BtnFilter.styles";

//IMPORT DATA
import { projects } from "../../assets/data/index";

const BtnFilter = () => {
  const tags = projects.map(tag => tag.tags);
  console.log(tags);
  return (
    <BtnContainer>
      <a className="tag">Tag</a>
    </BtnContainer>
  );
};

export default BtnFilter;
