export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SUBMIT_SEARCH = "SUBMIT_SEARCH";

export const createSearchChangeAction = (newValue) => ({
  type: SET_SEARCH_VALUE,
  value: newValue,
});

export const createSearchSubmitAction = () => ({
  type: SUBMIT_SEARCH,
});
