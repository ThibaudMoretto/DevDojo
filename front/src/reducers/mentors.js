export const initialState = {
  list: [],
  isLoading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case 'GET_MENTORS_SUCCESS':
      return {
        ...state,
        list: action.mentors,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
