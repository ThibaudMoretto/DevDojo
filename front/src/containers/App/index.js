import { connect } from 'react-redux';

import { createGetMentorsAction } from 'src/actions/mentors';
import { createGetRessourcesAction } from 'src/actions/ressources';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  loading: state.ressources.isLoading,
  loading: state.mentors.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getMentors: () => {
    dispatch(createGetMentorsAction());
  },

  getRessources: () => {
    dispatch(createGetRessourcesAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
