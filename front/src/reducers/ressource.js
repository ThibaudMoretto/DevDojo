/* eslint-disable quotes */
import {
  CHANGE_VALUE_RESSOURCE,
  INITIAL_VALUE,
  RESSOURCE_SUCCESS,
} from 'src/actions/ressources';

export const initialState = {
  id: '',
  title: '',
  description: '',
  duration: '',
  free: true,
  author: '',
  language: '',
  type: '',
  difficulty: '',
  link: '',
  publicationDate: '',
  image: '',
  technologies: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INITIAL_VALUE: {
      return {
        ...state,
        id: action.value.id,
        title: action.value.title,
        description: action.value.description,
        duration: action.value.duration,
        free: action.value.is_free,
        difficulty: action.value.difficulty_id,
        language: action.value.language_id,
        author: action.value.author_id,
        publicationDate: action.value.publication_date,
        type: action.value.ressource_type_id,
        link: action.value.link,
        image: action.value.ressource_image,
        technologies: action.value.technologiesRelated.map(({ id }) => id),
      };
    }
    case CHANGE_VALUE_RESSOURCE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case RESSOURCE_SUCCESS:
      return {
        ...state,
        id: '',
        title: '',
        description: '',
        duration: '',
        free: true,
        author: '',
        language: '',
        type: '',
        difficulty: '',
        link: '',
        publicationDate: '',
        image: '',
        technologies: [],
      };
    default:
      return state;
  }
};

export default reducer;
