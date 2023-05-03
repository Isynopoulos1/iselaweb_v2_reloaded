import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { BtnContainer } from "./BtnFilter.styles";

const BtnFilter = ({ tag, handleClick }) => {
  return <BtnContainer onClick={handleClick}>{tag}</BtnContainer>;
};

BtnFilter.propTypes = {
  tag: PropTypes.string,
  handleClick: PropTypes.func
};
BtnFilter.defaultProps = {
  tag: "",
  handleClick: ""
};
export default BtnFilter;
