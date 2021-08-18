import { connect } from 'react-redux';
import FicheRessource from 'src/components/FicheRessource';

import { findRessource } from 'src/selectors/ressource';

const mapStateToProps = (state, ownProps) => ({
  // ressource: findRessource(state.ressources.list, ownProps.match.params.id),
  ressource: findRessource(state.ressources.list, ownProps.match.params.link),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FicheRessource);


