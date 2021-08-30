import { connect } from "react-redux";

import { createSearchChangeAction } from "src/actions/searchBar";
import { createSearchSubmitAction } from "src/actions/searchBar";
import SearchBar from "src/components/Header/SearchBar";

const mapStateToProps = (state) => ({
  searchValue: state.searchBar.searchValue,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (newValue) => {
    dispatch(createSearchChangeAction(newValue));
  },

  onSearchSubmit: (newValue) => {
    dispatch(createSearchSubmitAction(newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
