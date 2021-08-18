/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve le mentor voulu dans la liste des mentors
 * @param {Array} mentors - tout les mentors
 * @param {string} searchedName - le nom du mentor recherchée
 * @return {Object} - Le mentor trouvé
 */
export function findMentor(mentors, searchedName) {
  const mentor = mentors.find((testedMentor) => {
    return testedMentor.name === searchedName;
  });
  return mentor;
}
