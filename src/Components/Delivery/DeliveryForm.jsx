import React, { useEffect } from "react";
import Input from "../Generals/Input";
import Flex from "../Generals/Styles/Flex.styled";
import Group from "../Generals/Styles/Group.styled";
import { useFormContext } from "react-hook-form";
import UseTransaction from "../../Hooks/UseTransaction";

const DeliveryForm = () => {
  const { watch, setValue } = useFormContext();
  const { transactionData } = UseTransaction();

  const dropShipping = watch("sendDropshipping") ? true : false;

  useEffect(() => {
    const names = [
      "email",
      "phoneNumber",
      "dropshipperName",
      "dropshipperNumber",
      "address",
    ];

    names.forEach((name) => {
      setValue(name, transactionData.deliveryForm?.[name]);
    });
  }, []);
  return (
    <>
      <Flex justify="space-between">
        <Group width="55%">
          <Input
            title="Email"
            name="email"
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            }}
          />
          <Input
            title="Phone Number"
            name="phoneNumber"
            rules={{
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /^[0-9(/)/-/+/]+$/,
            }}
          />
        </Group>
        <Group width="40%">
          <Input
            title="Dropshipper name"
            name="dropshipperName"
            rules={{ required: true, disabled: !dropShipping }}
          />
          <Input
            title="Dropshipper phone number"
            name="dropshipperNumber"
            rules={{
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /^[0-9(/)/-/+/]+$/,
              disabled: !dropShipping,
            }}
          />
        </Group>
      </Flex>
      <Group width="55%">
        <Input
          title="Delivery Address"
          textarea={true}
          name="address"
          rules={{ required: true, maxLength: 120 }}
        />
      </Group>
      <Group width="40%" />
    </>
  );
};

export default DeliveryForm;
