import React from "react";
import UseTransaction from "../../Hooks/UseTransaction.js";

const TotalPurchased = () => {
  const { transactionData } = UseTransaction();

  return <p>{transactionData.totalPurchasedItems} items purchased</p>;
};

export default TotalPurchased;
