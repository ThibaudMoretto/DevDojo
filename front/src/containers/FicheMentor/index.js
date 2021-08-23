import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FicheMentor from 'src/components/FicheMentor';

import { findMentor } from 'src/selectors/mentor';

const mapStateToProps = (state, ownProps) => ({
  mentor: findMentor(state.mentors.list, ownProps.match.params.name),
  isLogged: state.user.logged,
});

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(FicheMentor);
const containerWithRouter = withRouter(container);

export default containerWithRouter;
