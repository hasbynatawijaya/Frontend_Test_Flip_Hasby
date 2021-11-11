import axios from "axios";

import { setMovieList } from "./mutations";

export const getTransactionList = () => async (dispatch) => {
  try {
    const response = await axios.get("frontend-test");

    console.log(response.data);
  } catch (error) {
    throw error;
  }
};
