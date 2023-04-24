import styled from "styled-components";
import { fonts, weights } from "../../../styles/index";

export const AsideContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  position: fixed;
  z-index: -1;
  right: 0;
  top: 0;
  background-color: white;
  transition-duration: 1s;
`;

export const MenuOptions = styled.div`
  font-family: ${fonts.font1};
  text-align: center;
  font-weight: ${weights.weight1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
