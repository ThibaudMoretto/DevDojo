import { connect } from "react-redux";

import ListRessources from "src/components/Lists/ListRessources";
import { filterRessources } from "src/selectors/search";

const mapStateToProps = (state) => ({
  ressources: filterRessources(
    state.ressources.list,
    state.searchBar.submitValue
  ),
  isLogged: state.user.logged,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListRessources);
