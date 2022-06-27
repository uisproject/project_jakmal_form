import React, { useState, useEffect } from "react";
import BoxChoice from "../Generals/BoxChoice";
import { numberParser } from "../../utils/parser";
import UseTransaction from "../../Hooks/UseTransaction";
import { useFormContext } from "react-hook-form";

const PaymentType = () => {
  const { transactionData, setTransactionData } = UseTransaction();
  const [choiceIdx, setChoiceIdx] = useState(
    transactionData?.paymentForm?.id || 0
  );
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue("payment", paymentChoices[choiceIdx]);

    window.sessionStorage.setItem(
      "transactionInfo",
      JSON.stringify({
        ...transactionData,
        ...{ paymentForm: paymentChoices[choiceIdx] },
      })
    );

    setTransactionData((prev) => ({
      ...prev,
      ...{ paymentForm: paymentChoices[choiceIdx] },
    }));
  }, [choiceIdx]);

  const paymentChoices = [
    {
      id: 0,
      title: "e-Wallet",
      label: `${numberParser(transactionData.eWallet)} left`,
    },
    {
      id: 1,
      title: "Bank Transfer",
    },
    {
      id: 2,
      title: "Virtual Account",
    },
  ];

  return (
    <div>
      {paymentChoices.map((choice, idx) => (
        <BoxChoice
          key={idx}
          idx={idx}
          title={choice.title}
          label={choice.label}
          choiceIdx={choiceIdx}
          setChoiceIdx={setChoiceIdx}
        />
      ))}
    </div>
  );
};

export default PaymentType;
