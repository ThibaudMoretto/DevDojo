import { connect } from 'react-redux';

import { createGetMentorsAction } from 'src/actions/mentors';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  loading: state.mentors.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getMentors: () => {
    dispatch(createGetMentorsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
