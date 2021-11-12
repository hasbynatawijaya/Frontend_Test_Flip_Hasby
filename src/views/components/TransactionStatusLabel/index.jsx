import React from "react";

import transactionStatusNames from "../../../utils/transactionStatusNames";

import "./style.scss";

const TransactionStatusLabel = ({ status = "" }) => {
  return (
    <div
      className={`transaction-status-label transaction-status-label--${status.toLocaleLowerCase()}`}
    >
      {transactionStatusNames[status]}
    </div>
  );
};

export default TransactionStatusLabel;
