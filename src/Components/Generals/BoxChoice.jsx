import React from "react";
import Flex from "./Styles/Flex.styled";
import {
  StyledBoxChoiceContent,
  StyledBoxChoiceWrapper,
} from "./Styles/StyledBoxChoice.styled";

const BoxChoice = ({ idx, title, label, choiceIdx, setChoiceIdx }) => {
  return (
    <StyledBoxChoiceWrapper
      bgColor={choiceIdx === idx ? "#E8FBF1" : "#fff"}
      borderColor={choiceIdx === idx ? "#11cd6f" : "#E0E0E0"}
      onClick={() => {
        setChoiceIdx(idx);
      }}
    >
      <Flex justify="end" alignItems="center" style={{ width: "100%" }}>
        <div></div>
        <StyledBoxChoiceContent>
          <div>{title}</div>
          {label ? <b>{label}</b> : null}
        </StyledBoxChoiceContent>
        {choiceIdx === idx ? <i className="fa-solid fa-check"></i> : null}
      </Flex>
    </StyledBoxChoiceWrapper>
  );
};

export default BoxChoice;
