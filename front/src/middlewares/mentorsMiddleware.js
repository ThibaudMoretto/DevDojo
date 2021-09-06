import axios from 'axios';
import {
  createGetMentorsAction,
  createGetMentorsSuccessAction,
  GET_MENTORS,
  ADD_MENTOR,
  EDIT_MENTOR,
  DELETE_MENTOR,
  mentorSuccess,
} from 'src/actions/mentors';
import {
  createGetRessourcesAction,
} from 'src/actions/ressources';

import api from './utils/api';

const mentorsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MENTORS:
      axios.get(`${process.env.API_URL}/author`).then((response) => {
        console.log('Réponse API mentors list :', response.data.data);
        store.dispatch(createGetMentorsSuccessAction(response.data.data));
      });
      next(action);
      break;

    case ADD_MENTOR: {
      const state = store.getState();
      api({
        method: 'POST',
        url: '/author',
        headers: {
          'content-type': 'application/json',
        },
        data: {
          name: state.mentor.name,
          description: state.mentor.description,
          dev_role: state.mentor.role,
          image: state.mentor.image,
          github_account: state.mentor.github,
          linkedin_account: state.mentor.linkedin,
          twitch_account: state.mentor.twitch,
          twitter_account: state.mentor.twitter,
          website: state.mentor.website,
          youtube_account: state.mentor.youtube,
          mainTechnologies: state.mentor.technologies.map((id) => ({ id })),
        },
      })
        .then((response) => {
          console.log('Un mentor a été ajouté:', response.data);
          store.dispatch(mentorSuccess());
          store.dispatch(createGetMentorsAction());
          store.dispatch(createGetRessourcesAction());
        })
        .catch((error) => console.log(error));
      break;
    }

    case EDIT_MENTOR: {
      const state = store.getState();

      api({
        method: 'PUT',
        url: `/author/${state.mentor.id}`,
        headers: {
          'content-type': 'application/json',
        },
        data: {
          name: state.mentor.name,
          description: state.mentor.description,
          dev_role: state.mentor.role,
          image: state.mentor.image,
          github_account: state.mentor.github,
          linkedin_account: state.mentor.linkedin,
          twitch_account: state.mentor.twitch,
          twitter_account: state.mentor.twitter,
          website: state.mentor.website,
          youtube_account: state.mentor.youtube,
          mainTechnologies: state.mentor.technologies.map((id) => ({ id })),
        },
      })
        .then((response) => {
          console.log('Un mentor a été modifié:', response.data);
          store.dispatch(mentorSuccess());
          store.dispatch(createGetMentorsAction());
          store.dispatch(createGetRessourcesAction());
        })
        .catch((error) => console.log(error));
      break;
    }

    case DELETE_MENTOR: {
      const state = store.getState();

      console.log('ressource:', state);
      api({
        method: 'DELETE',
        url: `/author/${state.mentor.id}`,
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          console.log('Un mentor a été supprimé:', response.data);
          store.dispatch(mentorSuccess());
          store.dispatch(createGetMentorsAction());
          store.dispatch(createGetRessourcesAction());
        })
        .catch((error) => console.log(error));
      break;
    }

    default:
      next(action);
  }
};

export default mentorsMiddleware;
