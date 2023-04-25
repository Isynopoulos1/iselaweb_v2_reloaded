import styled from "styled-components";
import { sizes, fonts, weights } from "../../../styles/index";

export const AboutContainer = styled.div`
  position: relative;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
export const Bio = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  font-size: ${sizes.lg};
  font-family: ${fonts.font1};
  text-align: center;
`;
export const Greetings = styled.h2`
  font-size: ${sizes.xhg};
  font-weight: ${weights.w2};
`;
export const Description = styled.ul`
  list-style-type: none;
  font-weight: ${weights.w3};
`;

export const Picture = styled.img`
  display: flex;
  width: 600px;
  height: auto;
`;
