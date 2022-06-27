import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
} from "react";
import { StyledCheckBox } from "./Styles/CheckBox.styled";
import Flex from "./Styles/Flex.styled";
import { useFormContext } from "react-hook-form";
import UseTransaction from "../../Hooks/UseTransaction";

const CheckBox = forwardRef(({ label }, ref) => {
  const { transactionData } = UseTransaction();
  const [isChecked, setIsChecked] = useState(
    transactionData?.deliveryForm?.sendDropshipping
  );
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue(
      "sendDropshipping",
      transactionData?.deliveryForm?.sendDropshipping
    );
  }, []);

  useImperativeHandle(ref, () => ({
    checkHandler,
  }));

  const checkHandler = () => {
    setIsChecked(!isChecked);
    setValue("sendDropshipping", !isChecked);
  };

  const colorTheme = isChecked === true ? "#11cd6f" : "#E0E0E0";

  return (
    <>
      <Flex alignItems="center">
        <StyledCheckBox
          type="checkbox"
          onClick={checkHandler}
          borderColor={colorTheme}
          ref={ref}
        >
          {isChecked ? (
            <i className="fa-solid fa-check" style={{ color: "#11cd6f" }}></i>
          ) : null}
        </StyledCheckBox>
        {label}
      </Flex>
    </>
  );
});

export default CheckBox;
