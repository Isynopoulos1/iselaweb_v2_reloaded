import React from "react";
import PropTypes from "prop-types";
//DATA
import { projects } from "../../../assets/data/Data";

//IMPORT STYLES
import { CardContainer, Project, Cover } from "./Card.styles";

const Card = ({ title, cover, onClick }) => {
  return (
    <CardContainer>
      <Cover src={cover} onClick={onClick} />
      <Project>{title}</Project>
    </CardContainer>
  );
};

Card.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Card.defaultProps = {
  cover: "",
  title: ""
};
export default Card;
