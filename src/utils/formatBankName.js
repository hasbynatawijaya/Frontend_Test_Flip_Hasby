const formatBankName = (bankName = "") => {
  if (bankName.length <= 4) {
    return bankName.toUpperCase();
  } else {
    return `${bankName.charAt(0).toUpperCase()}${bankName.slice(1)}`;
  }
};

export default formatBankName;
