import styled from "styled-components";
import { margins } from "../../../styles/index";
export const WorkContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
`;
export const MappedCards = styled.div`
  position: relative;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
`;
export const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${margins.bottom2};
  gap: 10px;
`;
export const SearchProjects = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
