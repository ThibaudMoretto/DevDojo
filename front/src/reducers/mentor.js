import {
  CHANGE_VALUE_MENTOR,
  INITIAL_VALUE_MENTOR,
  MENTOR_SUCCESS,
} from 'src/actions/mentors';

export const initialState = {
  id: '',
  name: '',
  description: '',
  role: '',
  image: '',
  github: '',
  linkedin: '',
  twitch: '',
  twitter: '',
  website: '',
  youtube: '',
  technologies: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INITIAL_VALUE_MENTOR: {
      return {
        ...state,
        id: action.value.id,
        name: action.value.name,
        role: action.value.dev_role,
        description: action.value.description,
        image: action.value.image,
        github: action.value.github_account,
        linkedin: action.value.linkedin_account,
        twitch: action.value.twitch_account,
        twitter: action.value.twitter_account,
        website: action.value.website,
        youtube: action.value.youtube_account,
        technologies: action.value.mainTechnologies.map(({ id }) => id),
      };
    }
    case CHANGE_VALUE_MENTOR: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case MENTOR_SUCCESS:
      return {
        id: '',
        name: '',
        description: '',
        role: '',
        image: '',
        github: '',
        linkedin: '',
        twitch: '',
        twitter: '',
        website: '',
        youtube: '',
        technologies: [],
      };
    default:
      return state;
  }
};

export default reducer;
