//IMPORT STYLES
import { FooterContainer } from "./Footer.styles";

//IMPORT COMPONENTS
import Social from "../../elements/social/Social";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Social />
        <div>Copyright 2023 IselAlarcón© | All rights reserved</div>
      </FooterContainer>
    </>
  );
};

export default Footer;
