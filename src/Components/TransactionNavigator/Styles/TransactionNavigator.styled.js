import styled from "styled-components";
import Flex from "../../Generals/Styles/Flex.styled";

export const NavigatorWrapper = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "initial"};
  align-items: ${({ alignItems }) => alignItems || "initial"};
  background-color: #fffae6;
  padding: 20px;
  border-radius: 50px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

export const StepItem = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "initial"};
  align-items: ${({ alignItems }) => alignItems || "initial"};
  align-items: center;

  .fa-angle-right {
    margin: 0 2em;
    color: #ff8a00;
  }
`;

export const StepItemContent = styled(Flex)`
  user-select: none;
  align-items: center;
  cursor: pointer;
`;

export const StepItemNumber = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-position: center center;
  border-radius: 50%;
  padding: 10px;
  margin: 0 5px;
  color: ${({ color }) => color};
  font-weight: bold;
`;

export const StepItemLabel = styled.div`
  color: #ff8a00;
  font-weight: bold;
`;
