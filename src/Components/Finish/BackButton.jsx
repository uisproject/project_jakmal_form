import React from "react";
import Flex from "../Generals/Styles/Flex.styled";
import { StyledBackButton } from "./Styles/BackButton.styled";

const BackButton = () => {
  return (
    <StyledBackButton>
      <Flex alignItems="center">
        <i className="fa-solid fa-arrow-left"></i>
        <span style={{ margin: "0 10px" }}>Go to homepage</span>
      </Flex>
    </StyledBackButton>
  );
};

export default BackButton;
