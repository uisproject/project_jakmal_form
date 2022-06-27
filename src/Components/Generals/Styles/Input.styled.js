import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  width: 100%;
  border: 2px solid ${({ color }) => color};
  padding: 10px 0;
  margin-bottom: 10px;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0;
  margin: 0;
  border: transparent;
  outline: none;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 50px;
  padding: 0;
  margin: 0;
  resize: none;
  border: transparent;
  outline: none;
`;

export const StyledValidationIcon = styled.div`
  display: inline-block;
  margin: 0 10px;

  .fa-check {
    color: #11cd6f;
  }

  .fa-xmark {
    color: #ff8a00;
  }
`;

export const StyledInputLabel = styled.p`
  padding-bottom: 5px;
`;

export const StyledInputContent = styled.div`
  width: 80%;
  padding: 10px 0 10px 10px;
`;
