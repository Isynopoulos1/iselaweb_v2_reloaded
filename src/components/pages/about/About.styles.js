import styled from "styled-components";
import { sizes, fonts } from "../../../styles/index";

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bio = styled.div`
  width: 800px;
  font-size: ${sizes.md};
  text-align: center;
  font-family: ${fonts.font1};
`;

export const Picture = styled.img`
  display: flex;
  width: 800px;
  height: auto;
`;
