export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_MENTORS_SUCCESS':
      return {
        ...state,
        list: action.mentors,
      };
    default:
      return state;
  }
};

export default reducer;
