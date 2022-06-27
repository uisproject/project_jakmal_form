import React from "react";
import SuperHeading from "../../../Components/Generals/SuperHeading";
import TransactionLayout from "../../../Layouts/TransactionLayout";
import Flex from "../../../Components/Generals/Styles/Flex.styled";
import DetailInfo from "../../../Components/Finish/DetailInfo";
import { StyledCenteredGrid } from "../../../Components/Generals/Styles/Grid";
import BackButton from "../../../Components/Finish/BackButton";

const FinishPage = () => {
  return (
    <TransactionLayout>
      <StyledCenteredGrid>
        <div style={{ marginBottom: "100px" }}>
          <SuperHeading label="Delivery details" />
          <DetailInfo />
          <BackButton />
        </div>
      </StyledCenteredGrid>
    </TransactionLayout>
  );
};

export default FinishPage;
