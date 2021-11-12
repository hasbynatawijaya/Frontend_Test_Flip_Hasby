import axios from "axios";

import { setTransactionList, setTransactionDetails } from "./mutations";

export const index = () => async (dispatch) => {
  try {
    const response = await axios.get("frontend-test");

    if (response.data) {
      const data = response.data;
      dispatch(setTransactionList(Object.keys(data).map((key) => data[key])));
    }
  } catch (error) {
    throw error;
  }
};

export const get = (transactionId) => (dispatch, state) => {
  const currentTransactionList = state().transactions.transactionList;

  if (currentTransactionList) {
    const selectedTransaction = currentTransactionList.find(
      (transaction) => transaction.id === transactionId
    );
    dispatch(setTransactionDetails(selectedTransaction));
  }
};
