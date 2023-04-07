import React from "react";
import PropTypes from "prop-types";
// IMPORT STYLES
import { Logo } from "./IaLogo.styles";

const IaLogo = ({ color, height, width }) => {
  return (
    <Logo viewBox="0 0 1000 1000" fill={color} height={height} width={width}>
      <path d="M918 802c-6 32-27 49-46 49-21 0-41-19-41-58V552c0-15-2-15-9-1-59 154-141 291-246 288-57 0-103-46-103-103 0-148 365-127 341-302-18-89-128-107-174-110-22-1-43-2-62 1v-1l-5 1h-1c-96 22-148 98-165 166h86c0-43 14-121 78-151v1c11-3 22-4 34-5 68-6 124 35 124 136 0 185-353 93-353 271 0 14 2 27 5 38a75 75 0 0 1-73 52c-13 0-24-8-29-18-4-6-6-24-6-25l-1-12-1-55V320H100v15c26 0 60 1 67 35 3 29 3 15 2 164v212l2 32c7 41 25 68 57 78a124 124 0 0 0 32 5c17-1 96-6 131-59 26 45 82 66 140 66 80 0 164-35 198-107-2 81 53 116 108 116 48 0 86-23 93-75h-12zM215 227c39 0 66-26 66-66s-27-66-66-66c-40 0-66 26-66 66s26 66 66 66z" />
    </Logo>
  );
};

IaLogo.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string
};

IaLogo.defaultProps = {
  color: "black",
  width: "50px"
};

export default IaLogo;
