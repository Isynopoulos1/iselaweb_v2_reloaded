// IMPORT STYLES
import { HeaderContainer, MainContainer } from "./Header.styles";
import { useNavigate } from "react-router-dom";

//IMPORT COMPONENTS
import IaLogo from "../../elements/logo/IaLogo";
import Menu from "../../elements/menu/Menu";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <IaLogo onClick={() => navigate("/")} />
          <Menu />
        </HeaderContainer>
      </MainContainer>
    </>
  );
};

export default Header;
