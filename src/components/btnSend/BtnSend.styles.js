import styled from "styled-components";
import { fonts, colors } from "../../styles/index";

export const BtnContainer = styled.button`
  width: 100px;
  border-radius: 50px;
  font-family: ${fonts.font1}
  text-decoration: none;
  border: 1px solid black;
  background-color: white;
  color: black;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.test3};
    border: 1px solid ${colors.test3};
  }
`;
