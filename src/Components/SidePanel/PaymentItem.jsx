import React from "react";
import {
  StyledPaymentItemContent,
  StyledPaymentItemHr,
  StyledPaymentItemSelected,
} from "./Styles/PaymentItem.styled";

const PaymentItem = ({ title, label }) => {
  return (
    <>
      <StyledPaymentItemHr />
      <StyledPaymentItemContent>{title}</StyledPaymentItemContent>
      <StyledPaymentItemSelected>{label}</StyledPaymentItemSelected>
    </>
  );
};

export default PaymentItem;
