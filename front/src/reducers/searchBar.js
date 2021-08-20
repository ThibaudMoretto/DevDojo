import {
  SET_SEARCH_VALUE,
  SUBMIT_SEARCH,
} from 'src/actions/searchBar';

import {
  RESET_SUBMIT_VALUE
} from 'src/actions/navBar';

export const initialState = {
  searchValue: '',
  submitValue: '',
  submited: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
        submitValue: action.value,
        submited: false,
      };
    case SUBMIT_SEARCH:
      return {
        ...state,
        searchValue: '',
        submited: true,
      };
    case RESET_SUBMIT_VALUE:
      return {
        ...state,
        submitValue: '',
      };
    default:
      return state;
  }
};

export default reducer;
