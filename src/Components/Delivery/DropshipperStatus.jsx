import React, { useRef } from "react";
import CheckBox from "../Generals/CheckBox";

const DropshipperStatus = () => {
  const ref = useRef();

  return (
    <CheckBox
      label="Send as dropshipper"
      onClick={() => {
        ref.current.checkHandler();
      }}
      ref={ref}
    />
  );
};

export default DropshipperStatus;
