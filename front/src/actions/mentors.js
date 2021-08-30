export const INITIAL_VALUE = "INITIAL_VALUE";
// export const INITIAL_VALUE_MENTOR = "INITIAL_VALUE_MENTOR";
export const CHANGE_VALUE_MENTOR = "CHANGE_VALUE_MENTOR";

//GET
export const GET_MENTORS = "GET_MENTORS";
export const GET_MENTORS_SUCCESS = "GET_MENTORS_SUCCESS";

// ADD
export const ADD_MENTOR = "ADD_MENTOR";

//EDIT
export const EDIT_MENTOR = "EDIT_MENTOR";

//SUCESS ==> reset
export const MENTOR_SUCCESS = "MENTOR_SUCCESS";

//DELETE 
export const DELETE_MENTOR ="DELETE_MENTOR";  // ici >>>>

export const initialValue = (value) => ({
  type: INITIAL_VALUE,
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

// PUT
export const editMentor = () => ({
  type: EDIT_MENTOR,
});

// DELETE
export const deleteMentor = () => ({ // ici >>>>
  type: DELETE_MENTOR,
});

// SUCCESS = reset du state
export const mentorSuccess = () => ({
  type: MENTOR_SUCCESS,
});
