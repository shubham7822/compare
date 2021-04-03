import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  fetchedData: [],
  comparedData: [],
  error: "",
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHEDDATA:
      return {
        ...state,
        fetchedData: action.payload,
        loading: false,
        error: "",
      };
    case actionTypes.FETCHINGDATA:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case actionTypes.FETCHINGDATAFAIL:
      return {
        ...state,
        loading: false,
        fetchedData: [],
        error: action.payload,
      };
    case actionTypes.ADDINGDATA:
      return {
        ...state,
        comparedData: [...state.comparedData, action.payload],
      };

    case actionTypes.DELETINGDATA:
      const newState = [...state.comparedData];
      return {
        ...state,
        comparedData: newState.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
