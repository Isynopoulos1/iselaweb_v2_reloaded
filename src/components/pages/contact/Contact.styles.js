import styled from "styled-components";
import { fonts } from "../../../styles/index";

export const ContactContainer = styled.div`
  width: 100;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

export const Greetings = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: ${fonts.font1};
`;

export const formContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
