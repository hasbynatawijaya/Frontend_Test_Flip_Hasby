import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { get } from "../../../state/redux/transactions/actions";
import { transactionDetailsSelector } from "../../../state/redux/transactions/selectors";

import formatBankName from "../../../utils/formatBankName";
import formatDate from "../../../utils/formatDate";
import formatRupiah from "../../../utils/formatRupiah";

import { ReactComponent as StorageIcon } from "../../../assets/icons/storage-icon.svg";

import TransactionStatusLabel from "../../components/TransactionStatusLabel";

import "./styles.scss";

const TransactionDetails = () => {
  const dispatch = useDispatch();
  const { transactionId } = useParams();

  const transactionDetails = useSelector(transactionDetailsSelector);

  React.useEffect(() => {
    dispatch(get(transactionId));
  }, []);

  const renderTransactionDetails = () => {
    if (transactionDetails) {
      const {
        id,
        amount,
        sender_bank,
        beneficiary_bank,
        beneficiary_name,
        created_at,
        status,
        account_number,
        unique_code,
        remark,
      } = transactionDetails;

      return (
        <>
          <div className="transaction-details__card">
            <div className="transaction-details__status">
              <h4>ID TRANSAKSI: #{id}</h4>
              <TransactionStatusLabel status={status} />
            </div>
          </div>
          <br />
          <div className="transaction-details__card">
            <div className="transaction-details__detail">
              <StorageIcon className="transaction-details__icon" />
              <div>
                <div className="transaction-details__detail-items">
                  <h4>PENGIRIM</h4>
                  <span>{formatBankName(sender_bank)}</span>
                </div>
                <div className="transaction-details__detail-items">
                  <h4>PENERIMA</h4>
                  <p>{formatBankName(beneficiary_bank)}</p>
                  <p>{account_number}</p>
                  <p>{beneficiary_name}</p>
                </div>
                <div className="transaction-details__detail-items">
                  <h4>NOMINAL</h4>
                  <p>{formatRupiah(amount)}</p>
                  <p>
                    <span>Kode Unik:</span> {unique_code}
                  </p>
                </div>
                <div className="transaction-details__detail-items">
                  <h4>CATATAN</h4>
                  <p>{remark}</p>
                </div>
                <div className="transaction-details__detail-items">
                  <h4>WAKTU DIBUAT</h4>
                  <p>{formatDate(created_at)}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <h3>
          Data tidak ditemukan, silahkan kembali ke halaman transaksi dan pilih
          salah satu data
        </h3>
      );
    }
  };

  return (
    <div className="transaction-details">
      {renderTransactionDetails()}
      <Link to="/transactions" className="text-link">
        <div className="transaction-details__back-button">Kembali</div>
      </Link>
    </div>
  );
};

export default TransactionDetails;
