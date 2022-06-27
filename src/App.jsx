import React from "react";
import { BrowserRouter as Routes, useRoutes, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";
import GlobalStyles from "./Styles/Global";
import DeliveryPage from "./Pages/TransactionPage/DeliveryPage/DeliveryPage";
import PaymentPage from "./Pages/TransactionPage/PaymentPage/PaymentPage";
import transactionStepRoutes from "./utils/transactionStepRoutes";
import FinishPage from "./Pages/TransactionPage/FinishPage/FinishPage";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to={transactionStepRoutes[0].path} />,
    },
    {
      path: transactionStepRoutes[0].path,
      element: <DeliveryPage />,
    },
    {
      path: transactionStepRoutes[1].path,
      element: <PaymentPage />,
    },
    {
      path: transactionStepRoutes[2].path,
      element: <FinishPage />,
    },
  ]);
};

const App = () => {
  return (
    <>
      <Routes>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <AppRoutes />
        </ThemeProvider>
      </Routes>
    </>
  );
};

export default App;
