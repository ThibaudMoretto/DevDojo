import { connect } from 'react-redux';

import { createGetRessourcesAction } from 'src/actions/ressources';

import App from 'src/components/App';

const mapDispatchToProps = (dispatch) => ({
  getRessources: () => {
    dispatch(createGetRessourcesAction());
  },
});

export default connect(null, mapDispatchToProps)(App);
