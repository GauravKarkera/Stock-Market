import * as ACTION_TYPES from "../actionTypes/actionTypes";

const INITIAL_STATE = {
  searchResults: [],
  selectedData: {},
  searchbarLoading:false,
  dataLoading:false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SEARCH_SYMBOL:
      return { ...state, searchResults: action.payload };
    case ACTION_TYPES.SET_SYMBOL_DATA:
      return { ...state, selectedData: action.payload };
    case ACTION_TYPES.SHOW_LOADING:
      return {...state,searchbarLoading:action.payload}
      case ACTION_TYPES.DATA_LOADING:
      return {...state,searchbarLoading:action.payload}
    default:
      return state;
  }
};
