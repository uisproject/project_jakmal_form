import React from "react";
import SuperHeading from "../../../Components/Generals/SuperHeading";
import PaymentType from "../../../Components/Payment/PaymentType";
import Shipment from "../../../Components/Payment/Shipment";
import TransactionLayout from "../../../Layouts/TransactionLayout";

const PaymentPage = () => {
  return (
    <TransactionLayout>
      <SuperHeading label="Shipment" />
      <Shipment />
      <SuperHeading label="Payment" />
      <PaymentType />
    </TransactionLayout>
  );
};

export default PaymentPage;
