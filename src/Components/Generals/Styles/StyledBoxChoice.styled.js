import styled from "styled-components";

export const StyledBoxChoiceWrapper = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  border: 2px solid ${({ borderColor }) => borderColor};
  max-width: 150px;
  min-width: 180px;
  height: 60px;
  display: inline-flex;
  margin: 5px;
  cursor: pointer;
  position: relative;
  user-select: none;

  .fa-check {
    margin-right: 10px;
    color: #11cd6f;
  }
`;

export const StyledBoxChoiceContent = styled.div`
  padding-left: 10px;
  position: absolute;
  left: 0;
`;
