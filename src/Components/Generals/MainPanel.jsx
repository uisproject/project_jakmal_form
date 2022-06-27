import React from "react";
import { StyledMainPanel } from "./Styles/Container.styled.js";

const MainPanel = ({ children }) => {
  return <StyledMainPanel>{children}</StyledMainPanel>;
};

export default MainPanel;
