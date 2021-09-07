/* eslint-disable max-len */
import { connect } from 'react-redux';

import ListMentors from 'src/components/Lists/ListMentors';
import { filterCategoryAction, filterTechnologiesAuthor } from 'src/actions/mentors';
import { makeFilterAuthor } from 'src/selectors/filter';

const mapStateToProps = (state) => ({
  mentors: makeFilterAuthor(
    state.mentors.list,
    state.searchBar.submitValue,
    state.mentors.category,
    state.mentors.techno,
  ),
  isLogged: state.user.logged,
  categories: state.datas.datas.categories,
  technologies: state.datas.datas.technologies,
  stateCategory: state.mentors.category,
  stateTechno: state.mentors.techno,
});

const mapDispatchToProps = (dispatch) => ({
  filterCategoryAction: (value) => {
    dispatch(filterCategoryAction(value));
  },
  filterTechnologiesAuthor: (value) => {
    dispatch(filterTechnologiesAuthor(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListMentors);
