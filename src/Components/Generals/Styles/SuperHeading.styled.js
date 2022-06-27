import styled from "styled-components";
import { StyledH1 } from "./Text.styled";

export const StyledSuperHeading = styled(StyledH1)`
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
`;

export const StyledSuperHeadingLabel = styled.span`
  position: relative;
  z-index: 10;
`;

export const StyledSuperHeadingBorder = styled.div`
  width: calc(100% + 20px);
  height: 0.6rem;
  background-color: #eeeeee;
  position: absolute;
  bottom: 5px;
`;
