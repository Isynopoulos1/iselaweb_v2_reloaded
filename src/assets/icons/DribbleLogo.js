import React from "react";
import { Icon } from "./Icon.styles";
import PropTypes from "prop-types";

const DribbleLogo = ({ color, height, width, href }) => {
  return (
    <a href={href}>
      <Icon viewBox="0 0 200 200" fill={color} height={height} width={width}>
        <path d="M100 1h8c7 1 14 2 21 5 38 13 61 40 68 79l1 7v16l-1 7c-4 20-12 38-27 53a95 95 0 0 1-96 26A98 98 0 0 1 4 78C12 38 45 8 85 2h1l14-1zm-2 181c12 0 24-2 35-7l1-2-2-5c-3-18-8-35-14-52l-2-1a160 160 0 0 0-67 47v3l5 3c14 9 28 14 44 14zm13-82-7-16c-1-1-2-2-3-1a231 231 0 0 1-82 13c-1 0-2 0-2 2l1 16c3 13 8 26 17 36 2 3 2 3 4 0a167 167 0 0 1 72-50zM95 68a394 394 0 0 0-30-44 83 83 0 0 0-46 56c26 0 51-4 76-12zm69-20-7 5c-11 9-24 17-38 23l-1 2a848 848 0 0 1 10 18 130 130 0 0 1 53 1l1-2a82 82 0 0 0-18-47zm-11-12h-1a82 82 0 0 0-68-18c-2 1-1 1-1 2a378 378 0 0 1 29 42 178 178 0 0 0 41-26zm-5 130c18-13 29-30 33-51 0-2 0-2-2-3-15-3-29-3-44-1-2 0-2 0-2 2a344 344 0 0 1 15 53z" />
      </Icon>
    </a>
  );
};

DribbleLogo.propTypes = {
  color: PropTypes.string
};
DribbleLogo.defaultProps = {
  color: "black"
};

export default DribbleLogo;
