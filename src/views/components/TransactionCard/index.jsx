import React from "react";
import { Link } from "react-router-dom";

import formatRupiah from "../../../utils/formatRupiah";
import formatDate from "../../../utils/formatDate";
import formatBankName from "../../../utils/formatBankName";

import TransactionStatusLabel from "../TransactionStatusLabel";

import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right-icon.svg";

import "./style.scss";

const TransactionCard = ({
  transaction: {
    id,
    amount,
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    created_at,
    status,
  },
}) => {
  return (
    <Link className="text-link" to={`/transactions/${id}`}>
      <div
        className={`transaction-card transaction-card--${status.toLowerCase()}`}
      >
        <div className="transaction-card__info">
          <div className="transaction-card__info-bank">
            <span>{formatBankName(sender_bank)}</span> <ArrowRightIcon />{" "}
            <span>{formatBankName(beneficiary_bank)}</span>
          </div>
          <div className="transaction-card__info-name">
            <span>{beneficiary_name.toUpperCase()}</span>
          </div>
          <div className="transaction-card__info-amount">
            <span>{formatRupiah(amount)}</span>
            <div className="transaction-card__info-dots" />
            <span>{formatDate(created_at)}</span>
          </div>
        </div>
        <div className="transaction-card__status">
          <TransactionStatusLabel status={status} />
        </div>
      </div>
    </Link>
  );
};

export default TransactionCard;
