import React from "react";
import { useNavigate } from "react-router-dom";

//IMPORT DATA
import { projects } from "../../../assets/data";
//IMPORT STYLES
import { WorkContainer } from "./Works.styles";

//IMPORT COMPONENTS
import Card from "../../elements/card/Card";

const Works = () => {
  const navigate = useNavigate();
  return (
    <WorkContainer>
      {projects.map((card, i) => (
        <Card onClick={() => navigate(card.href)} key={i} title={card.title} cover={card.cover} />
      ))}
    </WorkContainer>
  );
};

export default Works;
