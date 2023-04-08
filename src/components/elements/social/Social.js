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
      <DribbleLogo href="https://dribbble.com/isynopoulos" target="_blank" />
      <GitLogo href="https://github.com/Isynopoulos1?tab=overview&from=2023-04-01&to=2023-04-07" target="_blank" />
      <InLogo href="https://www.linkedin.com/in/isela-v-alarcon/" target="_blank" />
    </SocialContainer>
  );
};

export default Social;
