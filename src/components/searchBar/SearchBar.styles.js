import styled from "styled-components";
import { margins, colors } from "../../styles/index";

export const SearchBarContainer = styled.div`
  display: flex;
  margin-bottom: ${margins.bottom2};
  width: 100%;
  justify-content: center;
`;

export const InputContainer = styled.input`
  display: flex;
  width: 500px;
  border: 1px solid ${colors.test2};
  border-radius: 50px;
  padding: 3px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.test2};
  }
`;
