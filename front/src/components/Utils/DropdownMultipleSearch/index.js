import React from 'react';
import { Form, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DropdownMultiple = ({
  options, placeholder, name, value, onChange, label, id,
}) => {
  const handleChange = (evt, data) => {
    onChange(data.value, name);
  };

  const nullValueToString = value === null ? '' : value;

  return (
    <Form.Field
      required
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      autoComplete="off"
      lazyLoad
      clearable
      defaultValue={nullValueToString}
      options={options}
      onChange={handleChange}
      control={Select}
      multiple
      search
      selection
    />
  );
};

DropdownMultiple.defaultProps = {
  value: '',
};

export default DropdownMultiple;
