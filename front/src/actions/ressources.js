export const INITIAL_VALUE = 'INITIAL_VALUE';
export const CHANGE_VALUE_RESSOURCE = 'CHANGE_VALUE_RESSOURCE';

//GET
export const GET_RESSOURCES = 'GET_RESSOURCES';
export const GET_RESSOURCES_SUCCESS = 'GET_RESSOURCES_SUCCESS';

// ADD
export const ADD_RESSOURCE = 'ADD_RESSOURCE';

// DELETE
export const DELETE_RESSOURCE = 'DELETE_RESSOURCE';

//EDIT
export const EDIT_RESSOURCE = 'EDIT_RESSOURCE';

//SUCESS ==> reset
export const RESSOURCE_SUCCESS = 'RESSOURCE_SUCCESS';

export const initialValue = (value) => ({
  type: INITIAL_VALUE,
  value,
});

export const changeValue = (value, key) => ({
  type: CHANGE_VALUE_RESSOURCE,
  value,
  key,
});

// GET
export const createGetRessourcesAction = () => ({
  type: GET_RESSOURCES,
});

export const createGetRessourcesSuccessAction = (ressources) => ({
  type: GET_RESSOURCES_SUCCESS,
  ressources: ressources,
});

// ADD
export const addRessource = () => ({
  type: ADD_RESSOURCE,
});

// DELETE
export const deleteRessource = () => ({
  type: DELETE_RESSOURCE,
});

// PUT
export const editRessource = () => ({
  type: EDIT_RESSOURCE,
});

// SUCCESS = reset du state
export const ressourceSuccess = () => ({
  type: RESSOURCE_SUCCESS,
});
