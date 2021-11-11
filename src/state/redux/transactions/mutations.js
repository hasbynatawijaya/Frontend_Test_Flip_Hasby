import actionTypes from "./types";

export const setTransactionList = (data) => ({
  type: actionTypes.transactionList,
  payload: data,
});

export const setTransactionDetails = (data) => ({
  type: actionTypes.transactionDetails,
  payload: data,
});
