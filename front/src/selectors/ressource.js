/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} ressources - toutes les recettes
 * @param {string} searchedId - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findRessource(ressources, searchedLink) {
  const ressource = ressources.find((testedRessource) => {
    return testedRessource.link === searchedLink;
  });
  return ressource;
}
