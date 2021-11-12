export const sortByKeyString = (arr, key, type) => {
  arr.sort((a, b) => {
    let lowerA = a[key].toLowerCase();
    let lowerB = b[key].toLowerCase();

    if (lowerA < lowerB) {
      return type === "desc" ? 1 : -1;
    }
    if (lowerA > lowerB) {
      return type === "desc" ? -1 : 1;
    }
    return 0;
  });
  return arr;
};

export const sortByKeyDate = (arr, key, type) => {
  arr.sort((a, b) => {
    let dateA = new Date(a[key]);
    let dateB = new Date(b[key]);

    if (type === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
  return arr;
};
