import styled from "styled-components";
import { sizes, fonts } from "../../../styles/index";

export const CardContainer = styled.div`
  height: auto;
`;

export const Cover = styled.img`
  display: flex;
  width: 380px;
  height: auto;
  border-radius: 6px;
  cursor: pointer;
`;

export const Project = styled.h2`
  width: 100%;
  font-size: ${sizes.md};
  text-align: center;
  font-family: ${fonts.font1};
`;
export const Link = styled.div`
  width: 100%;
`;
