import React from "react";
import {
  StyledCalculationItem,
  StyledCalculationTotal,
} from "./Styles/SidePanel.styled";
import UseTransaction from "../../Hooks/UseTransaction";
import { useFormContext } from "react-hook-form";
import Flex from "../Generals/Styles/Flex.styled";
import { numberParser } from "../../utils/parser";

const Calculation = () => {
  const { watch } = useFormContext();
  const { transactionData } = UseTransaction();

  return (
    <div>
      <StyledCalculationItem>
        <Flex justify="space-between">
          Cost of Goods
          <b>{numberParser(transactionData.costOfGoodsFee)}</b>
        </Flex>
      </StyledCalculationItem>

      {watch("sendDropshipping") == true ||
      transactionData?.deliveryForm?.sendDropshipping === true ? (
        <StyledCalculationItem>
          <Flex justify="space-between">
            Dropshipping Fee
            <b>{numberParser(5900)}</b>
          </Flex>
        </StyledCalculationItem>
      ) : null}

      {transactionData?.shipmentForm ? (
        <StyledCalculationItem>
          <Flex justify="space-between">
            {transactionData?.shipmentForm?.title} shipment
            <b>{numberParser(transactionData?.shipmentForm?.label)}</b>
          </Flex>
        </StyledCalculationItem>
      ) : null}

      <StyledCalculationTotal>
        Total
        <span>
          {numberParser(
            Math.ceil(
              transactionData.costOfGoodsFee +
                (watch("sendDropshipping") == true ||
                transactionData?.deliveryForm?.sendDropshipping
                  ? 5900
                  : 0) +
                (transactionData?.shipmentForm?.label
                  ? transactionData?.shipmentForm?.label
                  : 0)
            )
          )}
        </span>
      </StyledCalculationTotal>
    </div>
  );
};

export default Calculation;
