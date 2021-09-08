export const initialState = {
  list: [],
  isLoading: true,
  category: '',
  techno: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_MENTORS': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_MENTORS_SUCCESS': {
      return {
        ...state,
        list: action.mentors,
        isLoading: false,
      };
    }
    case 'FILTER_CATEGORY': {
      return {
        ...state,
        category: action.value,
      };
    }
    case 'FILTER_TECHNO_AUTHOR': {
      return {
        ...state,
        techno: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
