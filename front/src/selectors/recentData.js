/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la ressource voulue dans la liste des ressources
 * @param {Array} data - toutes les ressources
 * @return {Object} donnee - La ressource trouvée
 */

export function recentData(data) {
  const donnee = data.slice(Math.max(data.length - 3, 1));
  return donnee;
}
