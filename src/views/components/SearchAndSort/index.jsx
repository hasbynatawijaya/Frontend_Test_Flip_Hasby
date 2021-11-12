import React from "react";

import { ReactComponent as SearchIcon } from "../../../assets/icons/search-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/arrow-down-icon.svg";

import "./index.scss";

const sortItemList = [
  {
    id: "",
    label: "URUTKAN",
  },
  {
    id: "beneficiary_name:asc",
    label: "Nama A-Z",
  },
  {
    id: "beneficiary_name:desc",
    label: "Nama Z-A",
  },
  {
    id: "created_at:asc",
    label: "Tanggal terbaru",
  },
  {
    id: "created_at:desc",
    label: "Tanggal terlama",
  },
];

const SearchAndSort = ({
  searchValue,
  sortValue,
  handleChangeSort,
  handleChangeSearch,
}) => {
  const [isOpenSort, setIsOpenSort] = React.useState(false);

  return (
    <div className="search-and-sort">
      <div className="search-and-sort__search">
        <SearchIcon className="search-and-sort__search-icon" />
        <input
          type="text"
          className="search-and-sort__search-input"
          placeholder="Cari nama atau bank"
          value={searchValue}
          onChange={(e) => handleChangeSearch(e.target.value)}
        />
      </div>
      <div
        onClick={() => setIsOpenSort(!isOpenSort)}
        className="search-and-sort__sort"
      >
        <p className="search-and-sort__sort-text">{sortValue.label}</p>
        <ArrowDownIcon className="search-and-sort__sort-icon" />
        {isOpenSort && (
          <div className="search-and-sort__sort__item-container">
            {sortItemList.map((item) => (
              <>
                {item.id !== sortValue.id && (
                  <div
                    onClick={() => handleChangeSort(item)}
                    key={item.id}
                    className="search-and-sort__sort__item-list"
                  >
                    {item.label}
                  </div>
                )}
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndSort;
