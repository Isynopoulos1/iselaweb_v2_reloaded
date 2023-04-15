import React from "react";

//IMPORT DATA
import { projects } from "../../../assets/data/Data";
//IMPORT STYLES
import { WorkContainer } from "./Work.styles";

//IMPORT COMPONENTS
import Card from "../../elements/card/Card";

const Works = () => {
  return (
    <WorkContainer>
      {projects.map(card => (
        <Card title={card.title} cover={card.cover} />
      ))}
    </WorkContainer>
  );
};

export default Works;
