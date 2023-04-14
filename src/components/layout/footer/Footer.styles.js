import styled from "styled-components";
import { sizes, fonts, margins } from "../../../styles/index";

export const FooterContainer = styled.footer`
  width: 100%;
  font-size: ${sizes.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${fonts.font1};
  margin-top: ${margins.top1};
  margin-bottom: ${margins.bottom1};
`;
