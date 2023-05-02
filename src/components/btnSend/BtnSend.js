import React from "react";
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

export default BtnSend;
