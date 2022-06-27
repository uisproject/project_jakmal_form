import React from "react";
import Flex from "./Styles/Flex.styled";
import {
  StyledInput,
  StyledInputWrapper,
  StyledInputLabel,
  StyledInputContent,
  StyledTextArea,
  StyledValidationIcon,
} from "./Styles/Input.styled";
import { useFormContext } from "react-hook-form";

const Input = ({ title, textarea = false, name, rules }) => {
  const {
    register,
    setFocus,
    formState: { errors },
    watch,
  } = useFormContext();

  const value = watch(name);

  const colorTheme =
    value && !errors?.[name]
      ? "#11cd6f"
      : errors?.[name]
      ? "#FF8A00"
      : "#E0E0E0";

  return (
    <StyledInputWrapper
      color={colorTheme}
      onClick={() => {
        setFocus(name ? name : "input");
      }}
    >
      {textarea === true ? (
        <span style={{ position: "absolute", bottom: "0", right: "10px" }}>
          {120 - (value ? value.length : 0)}
        </span>
      ) : null}
      <Flex justify="space-between" alignItems="center">
        <StyledInputContent>
          <StyledInputLabel>{title}</StyledInputLabel>
          {textarea ? (
            <StyledTextArea {...register(name ? name : "textarea", rules)} />
          ) : (
            <StyledInput {...register(name ? name : "input", rules)} />
          )}
        </StyledInputContent>
        <StyledValidationIcon>
          {value && !errors?.[name] ? (
            <i className="fa-solid fa-check"></i>
          ) : errors?.[name] ? (
            <i className="fa-solid fa-xmark"></i>
          ) : null}
        </StyledValidationIcon>
      </Flex>
    </StyledInputWrapper>
  );
};

export default Input;
