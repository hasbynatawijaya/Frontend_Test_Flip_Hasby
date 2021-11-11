import actionTypes from "./types";

const initialState = {
  transactionList: [],
  transactionDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.transactionList:
      return {
        ...state,
        transactionList: action.payload,
      };
    case actionTypes.transactionDetails:
      return {
        ...state,
        transactionDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
