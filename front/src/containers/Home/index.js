import { connect } from 'react-redux';

import Home from 'src/components/Home';
import { recentData } from 'src/selectors/recentData';

const mapStateToProps = (state) => ({
  ressources: recentData(state.ressources.list),
  mentors: recentData(state.mentors.list),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
