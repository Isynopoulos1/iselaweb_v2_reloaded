import React from "react";
import PropTypes from "prop-types";
//DATA
import { projects } from "../../../assets/data/Data";

//IMPORT STYLES
import { CardContainer, Project, Cover } from "./Card.styles";

const Card = ({ title, cover }) => {
  return (
    <CardContainer>
      <Cover id="Project" src={cover} />
      <Project>{title}</Project>
    </CardContainer>
  );
};

Card.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string
};
Card.defaultProps = {
  cover: "",
  title: ""
};
export default Card;
