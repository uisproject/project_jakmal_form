import styled from "styled-components";

const Group = styled.div`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export default Group;
