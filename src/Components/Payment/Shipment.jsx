import React, { useState, useEffect } from "react";
import BoxChoice from "../Generals/BoxChoice";
import { numberParser } from "../../utils/parser";
import { useFormContext } from "react-hook-form";
import UseTransaction from "../../Hooks/UseTransaction";

const shipmentChoices = [
  {
    id: 0,
    title: "GO-SEND",
    label: 15000,
  },
  {
    id: 1,
    title: "JNE",
    label: 9000,
  },
  {
    id: 2,
    title: "Personal Courier",
    label: 1500000,
  },
];

const Shipment = () => {
  const { transactionData, setTransactionData } = UseTransaction();
  const [choiceIdx, setChoiceIdx] = useState(
    transactionData?.shipmentForm?.id || 0
  );
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue("payment", shipmentChoices[choiceIdx]);
    window.sessionStorage.setItem(
      "transactionInfo",
      JSON.stringify({
        ...transactionData,
        ...{ shipmentForm: shipmentChoices[choiceIdx] },
      })
    );
    setTransactionData((prev) => ({
      ...prev,
      ...{ shipmentForm: shipmentChoices[choiceIdx] },
    }));
  }, [choiceIdx]);

  return (
    <div style={{ marginBottom: "50px" }}>
      {shipmentChoices.map((choice, idx) => (
        <BoxChoice
          key={idx}
          idx={idx}
          title={choice.title}
          label={numberParser(choice.label)}
          choiceIdx={choiceIdx}
          setChoiceIdx={setChoiceIdx}
        />
      ))}
    </div>
  );
};

export default Shipment;
