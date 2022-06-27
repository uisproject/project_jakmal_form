import React, { useEffect } from "react";
import {
  NavigatorWrapper,
  StepItem,
  StepItemLabel,
  StepItemNumber,
  StepItemContent,
} from "./Styles/TransactionNavigator.styled";
import UseTransaction from "../../Hooks/UseTransaction";
import transactionStepRoutes from "../../utils/transactionStepRoutes";
import { useLocation } from "react-router-dom";

const TransactionNavigator = () => {
  const { step, setStep } = UseTransaction();
  const { pathname } = useLocation();

  useEffect(() => {
    const routeIndex = transactionStepRoutes.findIndex(
      (route) => route.path === pathname
    );
    setStep(routeIndex);
  }, [step]);

  return (
    <NavigatorWrapper>
      {transactionStepRoutes.map((routes, idx) => (
        <StepItem key={idx}>
          <StepItemContent>
            <StepItemNumber
              backgroundColor={idx <= step ? "#ff8a00" : "#ffe4b8"}
              color={idx <= step ? "#fff" : "#ff8a00"}
            >
              {idx + 1}
            </StepItemNumber>
            <StepItemLabel>{routes.name}</StepItemLabel>
          </StepItemContent>
          {idx < transactionStepRoutes.length - 1 ? (
            <i className="fa-solid fa-angle-right"></i>
          ) : null}
        </StepItem>
      ))}
    </NavigatorWrapper>
  );
};

export default TransactionNavigator;
