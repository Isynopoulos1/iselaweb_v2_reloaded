import React from "react";
import PropTypes from "prop-types";
//IMPORT STYLES

import { BtnContainer } from "../btnSend/BtnSend.styles";

const BtnSend = ({ state }) => {
  // HANDLE FUNCTIONS
  const handleClick = async e => {
    e.preventDefault();

    console.log(state);
    // API EXAMPLE
    // await axios.post("/api/message", { state });
  };

  // MAIN RENDER
  return <BtnContainer onClick={handleClick}> :)</BtnContainer>;
};

BtnSend.propTypes = {
  state: PropTypes.object
};
BtnSend.defaultProps = {
  state: ""
};

export default BtnSend;
