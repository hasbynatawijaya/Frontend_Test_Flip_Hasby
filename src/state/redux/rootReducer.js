import { combineReducers } from "redux";

import transactionsReducer from "./transactions/reducers";

const rootReducer = combineReducers({
  transactions: transactionsReducer,
});

export default rootReducer;
