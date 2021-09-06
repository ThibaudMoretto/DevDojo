import { connect } from 'react-redux';

import ListRessources from 'src/components/Lists/ListRessources';
import { selectorFilter } from 'src/selectors/filter';
import { filterLanguageAction } from 'src/actions/ressources';

const mapStateToProps = (state) => ({
  ressources: selectorFilter(
    state.ressources.list,
    state.ressources.filter,
  ),
  stateFilter: state.ressources.filter,
  isLogged: state.user.logged,
  languages: state.datas.datas.languages,
});

const mapDispatchToProps = (dispatch) => ({
  filterLanguageAction: (value) => {
    dispatch(filterLanguageAction(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListRessources);
