import styled from "styled-components";

export const StyledCheckBox = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  border: 1px solid ${({ borderColor }) => borderColor};
  display: grid;
  place-items: center;
  cursor: pointer;
`;
