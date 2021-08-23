import { connect } from 'react-redux';

import ListRessources from 'src/components/ListRessources';
import { filterRessources } from 'src/selectors/search';

const mapStateToProps = (state) => ({
  // ressources: state.ressources.list,
  ressources: filterRessources(state.ressources.list, state.searchBar.submitValue),
  isLogged: state.user.logged,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListRessources);


