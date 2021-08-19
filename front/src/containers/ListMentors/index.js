import { connect } from 'react-redux';

import ListMentors from 'src/components/ListMentors';

const mapStateToProps = (state) => ({
  mentors: state.mentors.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListMentors);
