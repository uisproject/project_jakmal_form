import React from "react";
import BackButton from "../Components/Generals/BackButton";
import {
  StyledContainer,
  StyledContainerWrapper,
} from "../Components/Generals/Styles/Container.styled.js";
import MainPanel from "../Components/Generals/MainPanel";
import { StyledContainerContent } from "../Components/Generals/Styles/Container.styled.js";
import TransactionNavigator from "../Components/TransactionNavigator/TransactionNavigator";
import SidePanel from "../Components/SidePanel/SidePanel";
import { useForm, FormProvider } from "react-hook-form";
import UseTransaction from "../Hooks/UseTransaction";
import { useNavigate } from "react-router-dom";
import transactionStepRoutes from "../utils/transactionStepRoutes";

const TransactionLayout = ({ children }) => {
  const navigate = useNavigate();
  const { transactionData, setTransactionData, setStep, step } =
    UseTransaction();
  const methods = useForm({ mode: "onChange" });

  const submitHandler = (data) => {
    if (step === 0) {
      setTransactionData((prev) => ({ ...prev, ...{ deliveryForm: data } }));
      window.sessionStorage.setItem(
        "transactionInfo",
        JSON.stringify({ ...transactionData, ...{ deliveryForm: data } })
      );
    }
    setStep((prev) => prev + 1);
    navigate(transactionStepRoutes[step + 1].path);
  };

  return (
    <StyledContainer>
      <TransactionNavigator />
      <div style={{ height: "100px" }}></div>
      <StyledContainerWrapper>
        <BackButton />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submitHandler)}>
            <StyledContainerContent justify="space-between">
              <MainPanel>{children}</MainPanel>
              <SidePanel />
            </StyledContainerContent>
          </form>
        </FormProvider>
      </StyledContainerWrapper>
    </StyledContainer>
  );
};

export default TransactionLayout;
