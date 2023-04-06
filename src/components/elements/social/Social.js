import React from "react";

//IMPORT STYLES
import { SocialContainer } from "./Social.styles";

//IMPORT COMPONENTS
import DribbleLogo from "../../../assets/icons/DribbleLogo";
import GitLogo from "../../../assets/icons/GitLogo";
import InLogo from "../../../assets/icons/InLogo";

export const Social = () => {
  return (
    <SocialContainer>
      <DribbleLogo width="15px" />
      <GitLogo width="15px" />
      <InLogo width="15px" />
    </SocialContainer>
  );
};

export default Social;
