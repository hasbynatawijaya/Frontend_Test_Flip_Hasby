const pathsTitle = {
  "/": "Daftar Transaksi",
  "/transactions": "Daftar Transaksi",
  "/transactions/:transactionId": "Detail Transaksi",
};

const getPageTitle = (pathName) => {
  const pathArr = pathName.split("/");
  let matchedPath = "/";

  for (const path in pathsTitle) {
    const currentPathArr = path.split("/");

    if (pathArr[1] === currentPathArr[1]) {
      if (pathArr.length === currentPathArr.length) {
        matchedPath = path;
      }
    }
  }

  return pathsTitle[matchedPath];
};

export default getPageTitle;
