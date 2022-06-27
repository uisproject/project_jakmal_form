import styled from "styled-components";
import Flex from "./Flex.styled";

export const StyledContainer = styled.div`
  background-color: #fffae6;
  width: 100vw;
  min-height: 100vh;
`;

export const StyledContainerWrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  width: 90%;
  margin: 0 auto;
  padding: 40px 40px;
  box-sizing: border-box;
`;

export const StyledContainerContent = styled(Flex)`
  margin-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledMainPanel = styled.main`
  width: 100%;
`;
