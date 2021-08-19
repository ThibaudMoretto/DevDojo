import axios from 'axios';

import { createGetRessourcesSuccessAction } from 'src/actions/ressources';

const ressourcesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_RESSOURCES':
      axios.get(`${process.env.API_URL}/ressource`)
        .then((response) => {
          console.log('Réponse API ressources list :', response.data.data)
          store.dispatch(createGetRessourcesSuccessAction(response.data.data));
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default ressourcesMiddleware;
