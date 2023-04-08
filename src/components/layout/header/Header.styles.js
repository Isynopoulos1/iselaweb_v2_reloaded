import styled from "styled-components";
import { fonts, weights } from "../../../styles/index";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  font-family: ${fonts.font1};
  font-weight: ${weights.weigth3};
  border: 1px solid green;
`;
