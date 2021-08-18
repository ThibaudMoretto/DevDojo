import { connect } from 'react-redux';

import { createGetRessourcesAction } from 'src/actions/ressources';
import { createGetMentorsAction } from 'src/actions/mentors';

import App from 'src/components/App';

const mapDispatchToProps = (dispatch) => ({
  getRessources: () => {
    dispatch(createGetRessourcesAction());
  },
  getMentors: () => {
    dispatch(createGetMentorsAction());
  },
});

export default connect(null, mapDispatchToProps)(App);
