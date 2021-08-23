import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FicheRessource from 'src/components/FicheRessource';

import { findRessource } from 'src/selectors/ressource';

const mapStateToProps = (state, ownProps) => ({
  ressource: findRessource(state.ressources.list, ownProps.match.params.slug),
  isLogged: state.user.logged,
});

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(FicheRessource);
const containerWithRouter = withRouter(container);

export default containerWithRouter;


