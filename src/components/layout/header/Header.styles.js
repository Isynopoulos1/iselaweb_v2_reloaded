import styled from "styled-components";
import { fonts, weights } from "../../../styles/index";

export const MainContainer = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  margin-bottom: 150px;
`;

export const HeaderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: ${fonts.font1};
  font-weight: ${weights.weigth3};
`;
