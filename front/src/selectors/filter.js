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
// FILTER SEARCHBAR MENTOR
export function filterMentors(mentors, submitValue) {
  const filterMentors = mentors.filter((mentor) => (
    mentor.name.toLowerCase().includes(submitValue.toLowerCase())
    || mentor.dev_role.toLowerCase().includes(submitValue.toLowerCase())
    || mentor.mainTechnologies.map((mentor) => (mentor.name)).includes(submitValue.toLowerCase())
  ));
  return filterMentors;
}

// FILTER LANGUAGE
export function selectorFilter(ressources, stateFilter) {
  const selectorFilter = ressources.filter((ressource) => (
    ressource.language.toLowerCase().includes(stateFilter)
  ));
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
  return selectorTechno;
}
// FILTER TYPE
export function selectorType(ressources, stateType) {
  const selectorType = ressources.filter((ressource) => (
    ressource.ressource_type.toLowerCase().includes(stateType)
  ));
  return selectorType;
}

// FILTER CATEGORY
export function selectorCategory(mentors, stateCategory) {
  const selectorCategory = mentors.filter((mentor) => (
    mentor.dev_role.toLowerCase().includes(stateCategory)
  ));
  return selectorCategory;
}

export function selectorTechnoAuthor(mentors, stateTechnoAuthor) {
  let selectorTechnoAuthor = mentors.filter((mentor) => (
    mentor.mainTechnologies.map((mentor) => (mentor.name)).includes(stateTechnoAuthor)
  ));
  if (selectorTechnoAuthor.length < 1) {
    selectorTechnoAuthor = mentors;
  }
  return selectorTechnoAuthor;
}

// Fonction de la mort qui tue
export async function makeFilter(ressources, submitValue, stateFilter, stateTechno, stateType) {
  const search = await filterRessources(ressources, submitValue);
  const firstFilter = await selectorFilter(search, stateFilter);
  const secondFilter = await selectorTechno(firstFilter, stateTechno);
  const thirdFilter = await selectorType(secondFilter, stateType);
  return thirdFilter;
}

export async function makeFilterAuthor(mentors, submitValue, stateCategory, stateTechnoAuthor) {
  const search = await filterMentors(mentors, submitValue);
  const firstFilter = await selectorCategory(search, stateCategory);
  const secondFilter = await selectorTechnoAuthor(firstFilter, stateTechnoAuthor);
  return secondFilter;
}
