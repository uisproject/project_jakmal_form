import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "initial"};
  align-items: ${({ alignItems }) => alignItems || "initial"};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export default Flex;
