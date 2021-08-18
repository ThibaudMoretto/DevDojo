/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} ressources - toutes les ressources
 * @param {string} searchedId - le link de la ressource recherchée
 * @return {Object} - La ressource trouvée
 */
export function findRessource(ressources, searchedLink) {
  const ressource = ressources.find((testedRessource) => {
    return testedRessource.link === searchedLink;
  });
  return ressource;
}
