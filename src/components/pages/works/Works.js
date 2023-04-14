import React from "react";

//IMPORT STYLES
import { WorkContainer } from "./Work.styles";

//IMPORT COMPONENTS
import Card from "../../elements/card/Card";

const Works = () => {
  return (
    <WorkContainer>
      <Card />
    </WorkContainer>
  );
};

const Projects = <Card />;
console.log(Projects);

export default Works;
