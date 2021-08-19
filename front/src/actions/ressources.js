export const GET_RESSOURCES = 'GET_RESSOURCES';

export const GET_RESSOURCES_SUCCESS = 'GET_RESSOURCES_SUCCESS';

export const createGetRessourcesAction = () => ({
  type: GET_RESSOURCES,
});

export const createGetRessourcesSuccessAction = (ressources) => ({
  type: GET_RESSOURCES_SUCCESS,
  ressources: ressources,
});
