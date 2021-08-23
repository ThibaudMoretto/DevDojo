import { connect } from 'react-redux';

import { createResetSubmitValueAction } from 'src/actions/navBar'
import NavBar from 'src/components/Header/NavBar';

const mapDispatchToProps = (dispatch) => ({
  resetSubmitValue: () => {
    dispatch(createResetSubmitValueAction());
  },
});

export default connect(null, mapDispatchToProps)(NavBar);
