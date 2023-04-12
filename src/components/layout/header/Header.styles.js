import styled from "styled-components";
import { fonts, weights } from "../../../styles/index";

export const MainContainer = styled.header`
  width: 100%;
  display: flex;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: ${fonts.font1};
  font-weight: ${weights.weigth3};
`;
