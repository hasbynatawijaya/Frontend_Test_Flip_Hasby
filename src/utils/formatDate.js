const formatDate = (date) => {
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dateObj = new Date(date);

  return `${dateObj.getDate()} ${
    monthNames[dateObj.getMonth()]
  } ${dateObj.getFullYear()}`;
};

export default formatDate;
