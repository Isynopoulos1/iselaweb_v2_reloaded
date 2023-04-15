import styled from "styled-components";
import { sizes, fonts } from "../../../styles/index";

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
  font-size: 100px;
  font-weight: 100;
`;
export const Description = styled.li`
  list-style-type: none;
  font-weight: 300;
`;

export const Picture = styled.img`
  display: flex;
  width: 600px;
  height: auto;
`;
