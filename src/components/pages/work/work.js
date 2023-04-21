import React from "react";
import { useNavigate } from "react-router-dom";

//IMPORT DATA
import { projects } from "../../../assets/data/Data";
// IMPORT STYLES
import { WorkContainer } from "./work.styles";

//IMPORT COMPONENTS
import Card from "../../elements/card/Card";
import Works from "../works/Works";

const Work = () => {
  const navigate = useNavigate();
  return (
    <WorkContainer>
      {projects.map(card => (
        <Card onClick={() => navigate("/works")} context={card.context} challenges={card.challenges} user={card.user} process={card.process} />
      ))}
    </WorkContainer>
  );
};

export default Work;
