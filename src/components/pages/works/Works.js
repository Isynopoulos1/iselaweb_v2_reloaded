import React from "react";
import { useNavigate } from "react-router-dom";

//IMPORT DATA
import { projects } from "../../../assets/data/Data";
//IMPORT STYLES
import { WorkContainer } from "./Works.styles";

//IMPORT COMPONENTS
import Card from "../../elements/card/Card";

const Works = () => {
  const navigate = useNavigate();
  return (
    <WorkContainer>
      {projects.map(card => (
        <Card onClick={() => navigate(card.href)} key={card.id} title={card.title} cover={card.cover} />
      ))}
    </WorkContainer>
  );
};

export default Works;
