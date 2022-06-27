import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TransactionProvider } from "./Contexts/TransactionContext";

ReactDOM.render(
  <React.StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
