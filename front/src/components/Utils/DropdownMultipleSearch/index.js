import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DropdownMultiple = ({
  options, placeholder, name, value, onChange,
}) => {
  const handleChange = (evt, data) => {
    onChange(data.value, name);
  };

  return (
    <Dropdown
      placeholder={placeholder}
      onChange={handleChange}
      fluid
      multiple
      search
      selection
      options={options}
      name={name}
      defaultValue={value}
    />
  );
};

export default DropdownMultiple;
