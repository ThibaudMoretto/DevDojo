import { connect } from 'react-redux';
import App from 'src/components/App';

import { createGetMentorsAction } from 'src/actions/mentors';
import { createGetRessourcesAction } from 'src/actions/ressources';
import { checkToken } from 'src/actions/user';


const mapStateToProps = (state) => ({
  loading: state.ressources.isLoading,
  loading: state.mentors.isLoading,
  submited: state.searchBar.submited,
  isLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  getMentors: () => {
    dispatch(createGetMentorsAction());
  },

  getRessources: () => {
    dispatch(createGetRessourcesAction());
  },

  checkIsLogged: () => {
    dispatch(checkToken());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
