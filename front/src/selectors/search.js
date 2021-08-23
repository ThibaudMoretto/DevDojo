/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la ressource voulue dans la liste des ressources
 * @param {Array} ressources - toutes les ressources
 * @param {string} searchedSlug - le link de la ressource recherchée
 * @return {Object} - La ressource trouvée
 */

export function filterRessources(ressources, submitValue) {
  const filterRessources = ressources.filter(ressource => {
    return ressource.title.toLowerCase().includes(submitValue.toLowerCase()) ||
      ressource.description.toLowerCase().includes(submitValue.toLowerCase())
  });
  return filterRessources;
};

export function filterMentors(mentors, submitValue) {
  const filterMentors = mentors.filter(mentor => {
    return mentor.name.toLowerCase().includes(submitValue.toLowerCase())
  });
  return filterMentors;
};
