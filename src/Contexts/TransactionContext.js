import { createContext, useState } from "react";

const TransactionContext = createContext(null);

const getDataFromSessionStorage = window.sessionStorage.getItem(
  "transactionInfo"
)
  ? JSON.parse(window.sessionStorage.getItem("transactionInfo"))
  : false;

export const TransactionProvider = ({ children }) => {
  const [step, setStep] = useState(0); // for navigator state
  const [transactionData, setTransactionData] = useState({
    orderID: "XXXKYB",
    deliveryForm: getDataFromSessionStorage.deliveryForm || null,
    paymentForm: getDataFromSessionStorage.paymentForm || null,
    shipmentForm: getDataFromSessionStorage.shipmentForm || null,
    totalPurchasedItems: 10,
    costOfGoodsFee: 500000,
    eWallet: 1500000,
  });

  return (
    <TransactionContext.Provider
      value={{
        transactionData,
        step,
        setTransactionData,
        setStep,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
