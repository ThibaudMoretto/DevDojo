export const INITIAL_VALUE_MENTOR = 'INITIAL_VALUE_MENTOR';
// export const INITIAL_VALUE_MENTOR = "INITIAL_VALUE_MENTOR";
export const CHANGE_VALUE_MENTOR = 'CHANGE_VALUE_MENTOR';

// GET
export const GET_MENTORS = 'GET_MENTORS';
export const GET_MENTORS_SUCCESS = 'GET_MENTORS_SUCCESS';

// ADD
export const ADD_MENTOR = 'ADD_MENTOR';

// PROPOSAL
export const PROPOSAL_MENTOR = 'PROPOSAL_MENTOR';

// EDIT
export const EDIT_MENTOR = 'EDIT_MENTOR';

// SUCESS ==> reset
export const MENTOR_SUCCESS = 'MENTOR_SUCCESS';

// DELETE
export const DELETE_MENTOR = 'DELETE_MENTOR'; // ici >>>>
// FILTER MENTOR CATEGORY
export const FILTER_CATEGORY = 'FILTER_CATEGORY';
// FILTER MENTOR TECHNOLOGIES
export const FILTER_TECHNO_AUTHOR = 'FILTER_TECHNO_AUTHOR';

export const initialValueMentor = (value) => ({
  type: INITIAL_VALUE_MENTOR,
  value,
});

export const changeValue = (value, key) => ({
  type: CHANGE_VALUE_MENTOR,
  value,
  key,
});

// GET
export const createGetMentorsAction = () => ({
  type: GET_MENTORS,
});

export const createGetMentorsSuccessAction = (mentors) => ({
  type: GET_MENTORS_SUCCESS,
  mentors: mentors,
});

// ADD
export const addMentor = () => ({
  type: ADD_MENTOR,
});

// PROPOSAL
export const proposalMentor = () => ({
  type: PROPOSAL_MENTOR,
});

// PUT
export const editMentor = () => ({
  type: EDIT_MENTOR,
});

// DELETE
export const deleteMentor = () => ({
  // ici >>>>
  type: DELETE_MENTOR,
});

// SUCCESS = reset du state
export const mentorSuccess = () => ({
  type: MENTOR_SUCCESS,
});

export const filterCategoryAction = (value) => ({
  type: FILTER_CATEGORY,
  value,
});

export const filterTechnologiesAuthor = (value) => ({
  type: FILTER_TECHNO_AUTHOR,
  value,
});
