import styled from "styled-components";
import { colors } from "../../styles/index";

export const Icon = styled.svg`
  transition: 0.3s ease;
  &:hover {
    fill: ${colors.lightgray};
  }
`;

export default Icon;
