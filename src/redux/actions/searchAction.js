import * as ACTION_TYPE from "../actionTypes/actionTypes";
import "isomorphic-fetch";

export function searchSymbol(searchInput) {
  return dispatch => {
    dispatch({ type: ACTION_TYPE.SHOW_LOADING, payload: true });
    return fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchInput}&apikey=NNU8XMCUMTM53G5D`
    )
      .then(result => {
        return result.json();
      })
      .then(json => {
        dispatch({
          type: ACTION_TYPE.SEARCH_SYMBOL,
          payload: json.bestMatches
        });
        dispatch({ type: ACTION_TYPE.SHOW_LOADING, payload: false });

        return json;
      });
  };
}

export function clearSearchResults() {
  return dispatch => {
    dispatch({
      type: ACTION_TYPE.SEARCH_SYMBOL,
      payload: []
    });
  };
}

export function displayData(symbol) {
  return dispatch => {
    dispatch({ type: ACTION_TYPE.DATA_LOADING, payload: true });
    return fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=NNU8XMCUMTM53G5D`
    )
      .then(result => {
        return result.json();
      })
      .then(json => {
        dispatch({ type: ACTION_TYPE.DATA_LOADING, payload: false });

        dispatch({
          type: ACTION_TYPE.SET_SYMBOL_DATA,
          payload: json["Time Series (Daily)"]
        });
        return json;
      });
  };
}
