import React from "react";
import { sizes, fonts, weights, colors } from "../../../styles/index";

//IMPORT STYLES
import { SocialContainer } from "./Social.styles";

//IMPORT COMPONENTS
import DribbleLogo from "../../../assets/icons/DribbleLogo";
import GitLogo from "../../../assets/icons/GitLogo";
import InLogo from "../../../assets/icons/InLogo";

export const Social = () => {
  return (
    <SocialContainer>
      <DribbleLogo />
      <GitLogo />
      <InLogo />
    </SocialContainer>
  );
};

export default Social;
