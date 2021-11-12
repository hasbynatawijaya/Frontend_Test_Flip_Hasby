import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { index } from "../../../state/redux/transactions/actions";
import { transactionListSelector } from "../../../state/redux/transactions/selectors";

import SearchAndSort from "../../components/SearchAndSort";
import TransactionCard from "../../components/TransactionCard";

import getTransactionsTotal from "../../../utils/getTransactionsTotal";
import formatRupiah from "../../../utils/formatRupiah";
import { sortByKeyString, sortByKeyDate } from "../../../utils/sorting";

import "./style.scss";

const Transactions = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredTranscation, setFilteredTransaction] = React.useState([]);
  const [sort, setSort] = React.useState({ id: "", label: "URUTKAN" });

  const transactionList = useSelector(transactionListSelector);

  React.useEffect(() => {
    if (!transactionList.length) {
      getTransactionList();
    }
  }, []);

  React.useEffect(() => {
    handleFilterTransaction();
  }, [searchTerm, transactionList]);

  const getTransactionList = async () => {
    try {
      setIsLoading(true);
      await dispatch(index());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleFilterTransaction = () => {
    setFilteredTransaction(
      transactionList.filter((transaction) => {
        return `${transaction.beneficiary_bank} ${transaction.beneficiary_name} ${transaction.sender_bank}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );
  };

  const handleSortTransactionList = (sort) => {
    setSort(sort);

    let sorted = [];

    if (sort.id.includes("beneficiary")) {
      sorted = sortByKeyString(
        filteredTranscation,
        "beneficiary_name",
        sort.id.split(":")[1]
      );
    } else if (sort.id.includes("created_at")) {
      sorted = sortByKeyDate(
        filteredTranscation,
        "created_at",
        sort.id.split(":")[1]
      );
    }

    if (sorted.length) {
      setFilteredTransaction(sorted);
    } else {
      handleFilterTransaction();
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return "Loading...";
    } else {
      if (filteredTranscation.length) {
        return filteredTranscation.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ));
      } else {
        return <h3>Data tidak ditemukan</h3>;
      }
    }
  };

  return (
    <div className="transactions">
      <h2>Halo kak!</h2>
      <br />
      <p>
        Kamu telah melakukan transaksi sebesar{" "}
        <span className="transactions__total-amount">
          {formatRupiah(getTransactionsTotal(transactionList))}
        </span>{" "}
        sejak menggunakan Flip.
      </p>
      <div className="transactions__content">
        <div>
          <SearchAndSort
            searchValue={searchTerm}
            sortValue={sort}
            handleChangeSearch={(value) => setSearchTerm(value)}
            handleChangeSort={(value) => handleSortTransactionList(value)}
          />
        </div>
        <div className="transactions__list">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Transactions;
