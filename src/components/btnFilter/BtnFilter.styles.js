import styled from "styled-components";
import { colors, sizes } from "../../styles/index";

export const BtnContainer = styled.button`
  display: flex;
  width: 100px;
  border-radius: 50px;
  border: 1px solid black;
  background-color: white;
  justify-content: center;
  font-size: ${sizes.md};
  padding: 2px;
  cursor: pointer;

  &:hover {
    transition: color 0.2s ease;
    color: ${colors.test4};
    border: 1px solid #b8a6ff;
    background-color: ${colors.test1};
  }
`;
