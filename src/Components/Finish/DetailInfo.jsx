import React, { useEffect } from "react";
import UseTransaction from "../../Hooks/UseTransaction";

const DetailInfo = () => {
  const { transactionData } = UseTransaction();

  useEffect(() => {
    alert("Open Console to check the data");
    console.log(transactionData);
  }, []);

  return (
    <>
      <div>
        <b>Order ID: {transactionData.orderID}</b>
        <p>
          Your order will be delivered today with{" "}
          {transactionData?.shipmentForm?.title}
        </p>
      </div>
    </>
  );
};

export default DetailInfo;
