import styled from "styled-components";
import { fonts, sizes } from "../../../styles/index";

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
  font-weight: 300;
  font-size: ${sizes.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Work = styled.div`
  font-size: 2rem;
`;
export const Contact = styled.div`
  font-size: 2rem;
`;

export const About = styled.div`
  font-size: 2rem;
`;
