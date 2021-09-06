/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/**
 *  on trouve la ressource voulue dans la liste des ressources
 * @param {Array} ressources - toutes les ressources
 * @param {string} stateFilter - le filtre appliqué a la ressource
 * @return {Object} - La ressource trouvée
 */

/// NOS FONCTIONS DE FILTRAGE

// FILTER SEARCHBAR
export function filterRessources(ressources, submitValue) {
  const filterRessources = ressources.filter((ressource) => (
    ressource.title.toLowerCase().includes(submitValue.toLowerCase())
      || ressource.description.toLowerCase().includes(submitValue.toLowerCase())
  ));
  return filterRessources;
}

// FILTER LANGUAGE
export function selectorFilter(ressources, stateFilter) {
  console.log(ressources);
  const selectorFilter = ressources.filter((ressource) => (
    ressource.language.toLowerCase().includes(stateFilter)
  ));
  console.log(selectorFilter);
  return selectorFilter;
}
// FILTER TECHNO
export function selectorTechno(ressources, stateTechno) {
  let selectorTechno = ressources.filter((ressource) => (
    ressource.technologiesRelated.map((ressource) => (ressource.name)).includes(stateTechno)
  ));
  if (selectorTechno.length < 1) {
    selectorTechno = ressources;
  }
  console.log(selectorTechno);
  return selectorTechno;
}

// Fonction de la mort qui tue
export async function makeFilter(ressources, submitValue, stateFilter, stateTechno) {
  const search = await filterRessources(ressources, submitValue);
  const firstFilter = await selectorFilter(search, stateFilter);
  const secondFilter = await selectorTechno(firstFilter, stateTechno);
  console.log(secondFilter);
  return secondFilter;
}
