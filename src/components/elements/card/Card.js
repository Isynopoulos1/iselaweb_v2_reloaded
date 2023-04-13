import React from "react";

//IMPORT STYLES
import { CardContainer, Project, Cover } from "./Card.styles";

const Card = () => {
  return (
    <CardContainer>
      <Cover id="cover" src="https://ik.imagekit.io/ppayaz/iselalarcon/works/covers/ppayaz-cover_1hdPX-yqn.png?updatedAt=1653951763558" />
      <Project>Title</Project>
    </CardContainer>
  );
};

export default Card;
