import React from "react";
import DeliveryForm from "../../../Components/Delivery/DeliveryForm";
import SuperHeading from "../../../Components/Generals/SuperHeading";
import TransactionLayout from "../../../Layouts/TransactionLayout";
import Flex from "../../../Components/Generals/Styles/Flex.styled";
import DropshipperStatus from "../../../Components/Delivery/DropshipperStatus";

const DeliveryPage = () => {
  return (
    <TransactionLayout>
      <Flex justify="space-between" alignItems="center">
        <SuperHeading label="Delivery details" />
        <DropshipperStatus />
      </Flex>
      <DeliveryForm />
    </TransactionLayout>
  );
};

export default DeliveryPage;
