import styled from "styled-components";
import { sizes, fonts, weights } from "../../../styles/index";

export const HeaderContainer = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${fonts.font1};
  font-weight: ${weights.weigth3};
  font-size: ${sizes.lg};
`;
