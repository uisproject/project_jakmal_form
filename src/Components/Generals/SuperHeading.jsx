import React from "react";
import {
  StyledSuperHeading,
  StyledSuperHeadingBorder,
  StyledSuperHeadingLabel,
} from "./Styles/SuperHeading.styled";

const SuperHeading = ({ label, width }) => {
  return (
    <StyledSuperHeading>
      <StyledSuperHeadingLabel>{label}</StyledSuperHeadingLabel>
      <StyledSuperHeadingBorder />
    </StyledSuperHeading>
  );
};

export default SuperHeading;
