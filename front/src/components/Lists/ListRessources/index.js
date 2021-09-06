/* eslint-disable max-len */
import React from 'react';
import Card from 'src/components/Lists/ListRessources/Card';
import PropTypes from 'prop-types';
import RessourceForm from 'src/containers/Forms/RessourceForm';
import DropdownFilter from 'src/components/Utils/DropdownFilter';
import './styles.scss';

function ListRessources({
  ressources, isLogged, languages, stateFilter, filterLanguageAction, filterTechnologiesAction, stateTechno, technologies,
}) {
  const [func, setFunc] = React.useState([]);

  (async function () {
    const asyncFunctions = [
      ressources,
    ];
    const results = await Promise.all(asyncFunctions);
    const incroyable = results[0];
    return setFunc(incroyable);
  }());
  return (
    <>
      <div className="containers">
        <div className="ressource-title">
          Nos <span className="ressource-title-red">Ressources</span>
          {isLogged && (
          <span className="button-add">
            <RessourceForm
              buttonMessage="Ajouter une ressource"
              headerMessage="Ajouter une ressource"
              isEdit={false}
            />
          </span>
          )}
          <DropdownFilter
            id="form-input-control-language"
            label="Language"
            placeholder="Language"
            name="language"
            onChange={filterLanguageAction}
            value={stateFilter}
            options={languages}
            search={false}
          />
          <DropdownFilter
            id="form-input-control-technologies"
            label="Technologie"
            placeholder="Technologie"
            name="technologies"
            onChange={filterTechnologiesAction}
            value={stateTechno}
            options={technologies}
            search={false}
          />
        </div>

        <div className="ressources">
          {func.map((ressource) => (
            <Card key={ressource.id} {...ressource} />
          ))}
        </div>
      </div>
    </>
  );
}

ListRessources.propTypes = {
  ressources: PropTypes.array.isRequired,
  isLogged: PropTypes.bool,
  languages: PropTypes.array.isRequired,
  technologies: PropTypes.array.isRequired,
  stateFilter: PropTypes.string.isRequired,
  stateTechno: PropTypes.string.isRequired,
  filterLanguageAction: PropTypes.func.isRequired,
  filterTechnologiesAction: PropTypes.func.isRequired,
};

ListRessources.defaultProps = {
  isLogged: false,
};

export default ListRessources;
