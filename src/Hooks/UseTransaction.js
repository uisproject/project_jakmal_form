import { useContext } from "react";
import TransactionContext from "../Contexts/TransactionContext";

const UseTransaction = () => {
  const context = useContext(TransactionContext);

  return context;
};

export default UseTransaction;
