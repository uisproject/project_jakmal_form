import React from "react";
import { StyledSidePanel } from "./Styles/SidePanel.styled";
import { StyledH2 } from "../Generals/Styles/Text.styled";
import TotalPurchased from "./TotalPurchased";
import Calculation from "./Calculation";
import ContinueButton from "./ContinueButton";
import PaymentItem from "./PaymentItem";
import UseTransaction from "../../Hooks/UseTransaction";

const SidePanel = () => {
  const { transactionData } = UseTransaction();
  return (
    <StyledSidePanel>
      <div style={{ marginBottom: "100px" }}>
        <StyledH2>Summary</StyledH2>
        <TotalPurchased />
        {transactionData?.shipmentForm ? (
          <PaymentItem
            title="Delivery estimation"
            label={transactionData.shipmentForm.title}
          />
        ) : null}

        {transactionData?.paymentForm ? (
          <PaymentItem
            title="Payment method"
            label={transactionData.paymentForm.title}
          />
        ) : null}
      </div>
      <div>
        <Calculation />
        <ContinueButton />
      </div>
    </StyledSidePanel>
  );
};

export default SidePanel;
