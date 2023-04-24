import styled from "styled-components";
import { fonts, sizes } from "../../../styles/index";

export const WorkContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  font-family: ${fonts.font1};
`;

export const Project = styled.h1`
  display: flex;
  font-size: ${sizes.hg};
  width: 100%;
`;

export const Context = styled.p`
  display: flex;
`;

export const Challenges = styled.p`
  display: flex;
`;
export const User = styled.p`
  display: flex;
`;

export const Process = styled.p`
  display: flex;
`;

export const Tools = styled.p`
  display: flex;
`;
