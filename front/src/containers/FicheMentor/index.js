import { connect } from 'react-redux';
import FicheMentor from 'src/components/FicheMentor';

import { findMentor } from 'src/selectors/mentor';

const mapStateToProps = (state, ownProps) =>
( console.log(ownProps),
  {
  // ressource: findRessource(state.ressources.list, ownProps.match.params.id),
  mentor: findMentor(state.mentors.list, ownProps.match.params.name),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FicheMentor);
