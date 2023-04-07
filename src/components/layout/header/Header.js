// IMPORT STYLES
import { HeaderContainer } from "./Header.styles";

//IMPORT COMPONENTS
import IaLogo from "../../elements/logo/IaLogo";
import Menu from "../../elements/menu/Menu";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <IaLogo />
        <Menu />
      </HeaderContainer>
    </>
  );
};

export default Header;
