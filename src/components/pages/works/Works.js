import React from "react";
import { useNavigate } from "react-router-dom";

//IMPORT DATA
import { projects } from "../../../assets/data/Data";
//IMPORT STYLES
import { WorkContainer } from "./Works.styles";

//IMPORT COMPONENTS
import Card from "../../elements/card/Card";
import Work from "../work/work";

const Works = () => {
  const navigate = useNavigate();
  return (
    <WorkContainer>
      {projects.map(card => (
        <Card onClick={() => navigate("/work")} key={card.id} title={card.title} cover={card.cover} href={card.href} />
      ))}
    </WorkContainer>
  );
};

export default Works;
