export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_RESSOURCES_SUCCESS':
      return {
        ...state,
        list: action.ressources,
      };
    default:
      return state;
  }
};

export default reducer;
