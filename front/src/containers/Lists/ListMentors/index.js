import { connect } from "react-redux";

import ListMentors from "src/components/Lists/ListMentors";

import { filterMentors } from "src/selectors/search";

const mapStateToProps = (state) => ({
  mentors: filterMentors(state.mentors.list, state.searchBar.submitValue),
  isLogged: state.user.logged,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListMentors);
