import {
  CHANGE_VALUE_RESSOURCE,
  INITIAL_VALUE,
  RESSOURCE_SUCCESS,
} from "src/actions/ressources";

export const initialState = {
  id: Number(),
  title: "",
  description: "",
  duration: Number(),
  free: Boolean(),
  author: Number(),
  language: Number(),
  type: Number(),
  difficulty: Number(),
  link: "",
  publicationDate: "",
  technologies: Array(),
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
        free: action.value.is_free,
        author: action.value.author_id,
        publicationDate: action.value.publication_date,
        type: action.value.ressource_type_id,
        link: action.value.link,
        technologies: action.value.technologiesRelated,
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
        id: Number(),
        title: "",
        description: "",
        duration: Number(),
        free: Boolean(),
        author: Number(),
        language: Number(),
        type: Number(),
        difficulty: Number(),
        link: "",
        publicationDate: "",
        technologies: Array(),
      };
    default:
      return state;
  }
};

export default reducer;
