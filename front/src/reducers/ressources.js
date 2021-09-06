export const initialState = {
  list: [],
  isLoading: true,
  filter: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_RESSOURCES': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_RESSOURCES_SUCCESS': {
      return {
        ...state,
        list: action.ressources,
        isLoading: false,
      };
    }
    case 'FILTER_LANGUAGE': {
      return {
        ...state,
        filter: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
