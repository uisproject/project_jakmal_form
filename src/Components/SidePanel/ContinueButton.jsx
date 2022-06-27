import React from "react";
import UseTransaction from "../../Hooks/UseTransaction";
import { StyledContinueButton } from "./Styles/ContinueButton.styled";

const ContinueButton = () => {
  const { step, setStep } = UseTransaction();

  return (
    <>
      {step < 2 ? (
        <StyledContinueButton>
          {step === 0
            ? "Continue to Payment"
            : step === 1
            ? "Pay with e-Wallet"
            : null}
        </StyledContinueButton>
      ) : null}
    </>
  );
};

export default ContinueButton;
