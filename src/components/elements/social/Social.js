import React from "react";

//IMPORT STYLES
import { SocialContainer } from "./Social.styles";

//IMPORT COMPONENTS
import DribbleLogo from "../../../assets/icons/DribbleLogo";

export const Social = () => {
  return (
    <SocialContainer>
      <DribbleLogo width="100px" />
    </SocialContainer>
  );
};

export default Social;
