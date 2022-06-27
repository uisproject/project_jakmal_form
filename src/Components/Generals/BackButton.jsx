import React from "react";
import { StyledBackButton } from "./Styles/BackButton.styed";
import UseTransaction from "../../Hooks/UseTransaction";
import { useNavigate } from "react-router-dom";
import transactionStepRoutes from "../../utils/transactionStepRoutes";

const BackButton = () => {
  const { step, setStep } = UseTransaction();
  const navigate = useNavigate();

  const backHandler = () => {
    if (step === 0) return;

    setStep((prev) => prev - 1);
    navigate(transactionStepRoutes[step - 1].path);
  };

  return (
    <>
      {step < 2 ? (
        <StyledBackButton onClick={backHandler}>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to {step === 0 ? "cart" : "delivery"}</span>
        </StyledBackButton>
      ) : null}
    </>
  );
};

export default BackButton;
