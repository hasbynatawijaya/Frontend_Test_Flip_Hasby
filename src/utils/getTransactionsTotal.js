const getTransactionsTotal = (transactionList) => {
  return transactionList.reduce((n, { amount }) => n + amount, 0);
};

export default getTransactionsTotal;
