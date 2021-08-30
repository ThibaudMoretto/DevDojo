import axios from 'axios';
import api from './utils/api';
import {
  createGetRessourcesAction,
  createGetRessourcesSuccessAction,
  GET_RESSOURCES,
  ADD_RESSOURCE,
  EDIT_RESSOURCE,
  DELETE_RESSOURCE,
  ressourceSuccess,
} from 'src/actions/ressources';

const ressourcesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RESSOURCES:
      axios.get(`${process.env.API_URL}/ressource`).then((response) => {
        console.log('Réponse API ressources list :', response.data.data);
        store.dispatch(createGetRessourcesSuccessAction(response.data.data));
      });
      next(action);
      break;

    case ADD_RESSOURCE: {
      const state = store.getState();

      api({
        method: 'POST',
        url: '/ressource',
        headers: {
          'content-type': 'application/json',
        },
        data: {
          title: state.ressource.title,
          description: state.ressource.description,
          link: state.ressource.link,
          duration: state.ressource.duration,
          publication_date: state.ressource.publicationDate,
          is_free: state.ressource.free,
          difficulty_id: state.ressource.difficulty,
          language_id: state.ressource.language,
          author_id: state.ressource.author,
          ressource_type_id: state.ressource.type,
          technologiesRelated: state.ressource.technologies.map((id) => ({
            id,
          })),
        },
      })
        .then((response) => {
          console.log('Une ressource a été ajouté:', response.data);
          store.dispatch(ressourceSuccess());
          store.dispatch(createGetRessourcesAction());
        })
        .catch((error) => console.log(error));
      break;
    }

    case EDIT_RESSOURCE: {
      const state = store.getState();

      api({
        method: 'PUT',
        url: `/ressource/${state.ressource.id}`,
        headers: {
          'content-type': 'application/json',
        },
        data: {
          // "id": state.ressource.id,
          title: state.ressource.title,
          description: state.ressource.description,
          link: state.ressource.link,
          duration: state.ressource.duration,
          publication_date: state.ressource.publicationDate,
          is_free: state.ressource.free,
          difficulty_id: state.ressource.difficulty,
          language_id: state.ressource.language,
          author_id: state.ressource.author,
          ressource_type_id: state.ressource.type,
          technologiesRelated: state.ressource.technologies.map((id) => ({
            id,
          })),
        },
      })
        .then((response) => {
          console.log('Une ressource a été modifié:', response.data);
          store.dispatch(ressourceSuccess());
          store.dispatch(createGetRessourcesAction());
        })
        .catch((error) => console.log(error));
      break;
    }

    case DELETE_RESSOURCE: {
      const state = store.getState();

      api({
        method: 'DELETE',
        url: `/ressource/${state.ressource.id}`,
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          console.log('Une ressource a été supprimé:', response.data);
          store.dispatch(ressourceSuccess());
          store.dispatch(createGetRessourcesAction());
        })
        .catch((error) => console.log(error));
      break;
    }

    default:
      next(action);
  }
};

export default ressourcesMiddleware;
