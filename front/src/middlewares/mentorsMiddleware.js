import axios from 'axios';

import { createGetMentorsSuccessAction } from 'src/actions/mentors';

const ressourcesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_MENTORS':
      axios.get(`${process.env.API_URL}/author`)
        .then((response) => {
          console.log('Réponse API mentors list :', response.data.data)
          store.dispatch(createGetMentorsSuccessAction(response.data.data));
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default ressourcesMiddleware;
