import React from 'react';
import { Form, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DropdownMultiple = ({
  options, placeholder, name, value, onChange, label, id,
}) => {
  const handleChange = (evt, data) => {
    onChange(data.value, name);
  };

  return (
    <Form.Field
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      autoComplete="off"
      lazyLoad
      required
      clearable
      defaultValue={value}
      options={options}
      onChange={handleChange}
      control={Select}
      multiple
      search
      selection
    />
  );
};

export default DropdownMultiple;
