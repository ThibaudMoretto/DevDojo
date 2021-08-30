import { LOGIN, saveUser, CHECK_TOKEN } from "src/actions/user";
import api from "./utils/api";

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      api({
        method: "POST",
        url: "/login",
        headers: {
          "content-type": "application/json",
        },
        data: {
          email: state.user.email,
          password: state.user.password,
        },
      })
        .then((response) => {
          // console.log('AuthMiddleware :', response.data.data)
          // console.log('AuthMiddleware token :', response.data.data.token)

          localStorage.setItem("token", response.data.data.token);

          api.defaults.headers.common.authorization = `Bearer ${response.data.data.token}`;

          const actionSaveUser = saveUser(response.data.data);

          store.dispatch(actionSaveUser);
        })
        .catch((error) => console.log(error));
      break;
    }
    case CHECK_TOKEN: {
      const token = localStorage.getItem("token");
      // console.log(token);

      if (token) {
        api({
          method: "POST",
          url: "/checkToken",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            const payload = response.data.user;
            const actionSaveUser = saveUser(payload);
            store.dispatch(actionSaveUser);
          })
          .catch((error) => console.log(error));
      }
      break;
    }
    default:
      next(action);
  }
};

export default auth;
