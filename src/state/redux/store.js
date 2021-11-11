import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const initialState = {};

const setStore = () => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  return { store };
};

export default setStore;
