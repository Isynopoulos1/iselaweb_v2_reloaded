import styled from "styled-components";
import { fonts, weights, margins } from "../../../styles/index";

export const MainContainer = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  z-index: 2;
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
  margin-top: ${margins.top1};
  margin-bottom: ${margins.bottom2};
`;
