import styled from "styled-components";
import { fonts, sizes, weights } from "../../../styles/index";

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
  font-size: ${sizes.xhg};
  width: 100%;
  font-weight: ${weights.w2};
`;

export const Video = styled.video`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
`;
export const Tags = styled.p`
  display: flex;
  font-weight: ${weights.w4};
  font-size: ${sizes.md};
`;

export const Context = styled.p`
  display: flex;
  font-weight: ${weights.w3};
  font-size: ${sizes.lg};
`;

export const Challenges = styled.p`
  display: flex;
  font-weight: ${weights.w3};
  font-size: ${sizes.lg};
`;
export const User = styled.p`
  display: flex;
  font-weight: ${weights.w3};
  font-size: ${sizes.lg};
`;

export const Process = styled.p`
  display: flex;
  font-weight: ${weights.w3};
  font-size: ${sizes.lg};
`;

export const Tools = styled.p`
  display: flex;
  font-weight: ${weights.w4};
  font-size: ${sizes.md};
`;
