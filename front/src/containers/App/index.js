import { connect } from 'react-redux';

import { createGetRessourcesAction } from 'src/actions/ressources';
import { createGetMentorsAction } from 'src/actions/mentors';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  loading: state.ressources.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getRessources: () => {
    dispatch(createGetRessourcesAction());
  },
  getMentors: () => {
    dispatch(createGetMentorsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
