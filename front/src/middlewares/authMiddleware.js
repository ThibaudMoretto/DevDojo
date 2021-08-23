import { LOGIN, saveUser, CHECK_TOKEN } from 'src/actions/user';
import api from './utils/api';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      api({
        method: 'POST',
        url: '/login',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          "email": state.user.email,
          "password": state.user.password
        },
      })
        .then((response) => {

          console.log('AuthMiddleware :', response.data.data)
          console.log('AuthMiddleware token :', response.data.data.token)

          localStorage.setItem('token', response.data.data.token);

          api.defaults.headers.common.authorization = `Bearer ${response.data.data.token}`;

          const actionSaveUser = saveUser(response.data.data);

          store.dispatch(actionSaveUser);
        })
        .catch((error) => console.log(error));
      break;
    }
    case CHECK_TOKEN: {
      const token = localStorage.getItem('token');

      if (token) {
        api.get('/checkToken', {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            const payload = { ...response.data.data };
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
