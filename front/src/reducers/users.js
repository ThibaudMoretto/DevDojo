import { CHANGE_VALUE, SAVE_USER, LOGOUT } from "src/actions/user";

export const initialState = {
  email: "",
  password: "",
  firstname: "Anonyme",
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case SAVE_USER: {
      const { firstname, logged } = action.payload;
      return {
        ...state,
        firstname,
        logged,
        email: "",
        password: "",
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
