import { connect } from 'react-redux';

import ListRessources from 'src/components/Lists/ListRessources';
import { makeFilter } from 'src/selectors/filter';
import { filterLanguageAction, filterTechnologiesAction, filterTypeAction } from 'src/actions/ressources';

const mapStateToProps = (state) => ({
  ressources: makeFilter(
    state.ressources.list,
    state.searchBar.submitValue,
    state.ressources.filter,
    state.ressources.techno,
    state.ressources.type,
  ),
  stateFilter: state.ressources.filter,
  stateTechno: state.ressources.techno,
  stateType: state.ressources.type,
  isLogged: state.user.logged,
  languages: state.datas.datas.languages,
  technologies: state.datas.datas.technologies,
  types: state.datas.datas.types,
});

const mapDispatchToProps = (dispatch) => ({
  filterLanguageAction: (value) => {
    dispatch(filterLanguageAction(value));
  },
  filterTechnologiesAction: (value) => {
    dispatch(filterTechnologiesAction(value));
  },
  filterTypeAction: (value) => {
    dispatch(filterTypeAction(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListRessources);
