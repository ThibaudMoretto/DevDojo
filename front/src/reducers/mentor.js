import {
  CHANGE_VALUE_MENTOR,
  INITIAL_VALUE,
  MENTOR_SUCCESS,
} from 'src/actions/mentors';

export const initialState = {
  id: Number(),
  name: '',
  description: '',
  image: '',
  github: '',
  linkedin: '',
  twitch: '',
  twitter: '',
  website: '',
  youtube: '',
};

const reducer = (state = initialState, action = {}) => {
  console.log('test', action);
  switch (action.type) {
    case INITIAL_VALUE: {
      return {
        ...state,
        id: action.value.id,
        name: action.value.name,
        description: action.value.description,
        image: action.value.image,
        github: action.value.github_account,
        linkedin: action.value.linkedin_account,
        twitch: action.value.twitch_account,
        twitter: action.value.twitter_account,
        website: action.value.website,
        youtube: action.value.youtube_account,
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
        ...state,
        id: Number(),
        name: '',
        description: '',
        image: '',
        github: '',
        linkedin: '',
        twitch: '',
        twitter: '',
        website: '',
        youtube: '',
      };
    default:
      return state;
  }
};

export default reducer;
