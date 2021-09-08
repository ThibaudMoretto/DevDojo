import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Segment } from 'semantic-ui-react';
import './styles.scss';

const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit }) => (
  <Segment>
    <Form onSubmit={onSearchSubmit}>
      <Input
        className="search"
        fluid
        icon="search"
        placeholder="Rechercher..."
        value={searchValue}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </Form>
  </Segment>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
