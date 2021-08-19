import {
  SET_SEARCH_VALUE,
  SUBMIT_SEARCH,
} from 'src/actions/searchBar';

export const initialState = {
  searchValue: '',
  submitValue: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        submitValue: action.value,
        searchValue: action.value,
      };
    case SUBMIT_SEARCH:
      return {
        ...state,
        searchValue: ''
      };
    default:
      return state;
  }
};

export default reducer;
