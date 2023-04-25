import styled from "styled-components";
import { fonts, weights, sizes, colors } from "../../../styles/index";

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
`;

export const MenuOptions = styled.div`
  position: relative;
  font-family: ${fonts.font1};
  text-align: center;
  font-weight: ${weights.w1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-size: ${sizes.xhg};

  & a {
    text-decoration: none;
    color: black;
  }
  & a:hover {
    color: ${colors.test1};
    transition: color 0.8s ease;
  }
`;
