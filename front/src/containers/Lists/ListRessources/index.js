import { connect } from 'react-redux';

import ListRessources from 'src/components/Lists/ListRessources';
import { makeFilter } from 'src/selectors/filter';
import { filterLanguageAction, filterTechnologiesAction } from 'src/actions/ressources';

const mapStateToProps = (state) => ({
  ressources: makeFilter(
    state.ressources.list,
    state.searchBar.submitValue,
    state.ressources.filter,
    state.ressources.techno,
  ),
  stateFilter: state.ressources.filter,
  stateTechno: state.ressources.techno,
  isLogged: state.user.logged,
  languages: state.datas.datas.languages,
  technologies: state.datas.datas.technologies,
});

const mapDispatchToProps = (dispatch) => ({
  filterLanguageAction: (value) => {
    dispatch(filterLanguageAction(value));
  },
  filterTechnologiesAction: (value) => {
    dispatch(filterTechnologiesAction(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListRessources);
