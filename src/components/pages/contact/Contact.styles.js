import styled from "styled-components";
import { fonts, colors } from "../../../styles/index";

export const ContactContainer = styled.div`
  width: 100%;
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

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
export const InputStyle = styled.input`
  width: 100%;
  text-decoration: none;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  font-family: ${fonts.font1};

  &:hover {
    border: 1px solid ${colors.test3};
    color: ${colors.test3};
  }
  &:focus {
    outline: none;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid gray;
  text-decoration: none;
  color: gray;
  border-radius: 5px;
  padding: 10px;
  font-family: ${fonts.font1};
  &:hover {
    border: 1px solid ${colors.test3};
  }
  &:focus {
    outline: none;
  }
`;
