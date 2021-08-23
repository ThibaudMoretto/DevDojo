/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la ressource voulue dans la liste des ressources
 * @param {Array} ressources - toutes les ressources
 * @param {string} searchedSlug - le link de la ressource recherchée
 * @return {Object} - La ressource trouvée
 */
export function findRessource(ressources, searchedSlug) {
  const ressource = ressources.find((testedRessource) => {
    return testedRessource.slug === searchedSlug;
  });
  return ressource;
}
