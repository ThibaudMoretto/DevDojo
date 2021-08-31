import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Segment } from 'semantic-ui-react';
import './styles.scss';

// NOE
const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit }) => {
  return (
    <Segment>
      <Form onSubmit={onSearchSubmit}>
        <Input
          className="search"
          fluid
          // loading={isLoading}
          icon="search"
          placeholder="Chercher des ressources et mentors"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
