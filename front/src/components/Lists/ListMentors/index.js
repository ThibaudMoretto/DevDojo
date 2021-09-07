/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Lists/ListMentors/Card';
import MentorForm from 'src/containers/Forms/MentorForm';
import DropdownFilter from 'src/components/Utils/DropdownFilter';

import './styles.scss';

function ListMentors({
  mentors, isLogged, categories, filterCategoryAction, stateCategory, searchResult, technologies, stateTechno, filterTechnologiesAuthor,
}) {
  const [func, setFunc] = React.useState([]);

  (async function () {
    const asyncFunctions = [
      mentors,
    ];
    const results = await Promise.all(asyncFunctions);
    const incroyable = results[0];
    return setFunc(incroyable);
  }());
  return (
    <>
      <div className="containers">
        <div className="mentor-title">
          Nos <span className="mentor-title-red">Mentors</span>
          {!searchResult && (
            <>
              {!isLogged && (
                <>
                  <span className="button-add">
                    <MentorForm
                      buttonMessage="Proposer un mentor"
                      headerMessage="Proposer un nouveau mentor"
                      isEdit={false}
                      isProposal
                    />
                  </span>
                </>
              )}
              {isLogged && (
                <>
                  <span className="button-add">
                    <MentorForm
                      buttonMessage="Ajouter un mentor"
                      headerMessage="Ajouter un nouveau mentor"
                      isEdit={false}
                      isProposal={false}
                    />
                  </span>
                </>
              )}
              <div className="container-filter">
                <div className="filter">
                  <DropdownFilter
                    id="form-input-control-dev-role"
                    label=""
                    placeholder="Spécialités"
                    name="Catégorie"
                    onChange={filterCategoryAction}
                    value={stateCategory}
                    options={categories}
                    search={false}
                  />
                </div>
                <div className="filter">
                  <DropdownFilter
                    id="form-input-control-dev-techno"
                    label=""
                    placeholder="Technologies"
                    name="Technologies"
                    onChange={filterTechnologiesAuthor}
                    value={stateTechno}
                    options={technologies}
                    search={false}
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mentors">
          {func.map((mentor) => (
            <Card key={mentor.id} {...mentor} />
          ))}
        </div>
      </div>
    </>

  );
}

ListMentors.propTypes = {
  mentors: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  filterCategoryAction: PropTypes.func.isRequired,
  stateCategory: PropTypes.string.isRequired,
  searchResult: PropTypes.bool.isRequired,
  technologies: PropTypes.array.isRequired,
  stateTechno: PropTypes.string.isRequired,
  filterTechnologiesAuthor: PropTypes.func.isRequired,
};

export default ListMentors;
