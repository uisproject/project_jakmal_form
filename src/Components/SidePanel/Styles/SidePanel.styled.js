import styled from "styled-components";
import Flex from "../../Generals/Styles/Flex.styled";

export const StyledSidePanel = styled.div`
  min-width: 300px;
  padding-left: 30px;
  border-left: 1px solid #ff8a00;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

export const StyledCalculationTotal = styled(Flex)`
  color: #ff8a00;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 20px 0;
`;

export const StyledCalculationItem = styled.div`
  margin: 7px 0;
`;
