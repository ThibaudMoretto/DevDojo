export const GET_MENTORS = 'GET_MENTORS';

export const GET_MENTORS_SUCCESS = 'GET_MENTORS_SUCCESS';

export const createGetMentorsAction = () => ({
  type: GET_MENTORS,
});

export const createGetMentorsSuccessAction = (mentors) => ({
  type: GET_MENTORS_SUCCESS,
  mentors: mentors,
});
