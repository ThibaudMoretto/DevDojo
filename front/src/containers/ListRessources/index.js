import { connect } from 'react-redux';

import ListRessources from 'src/components/ListRessources';

const mapStateToProps = (state) => ({
  ressources: state.ressources.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListRessources);


