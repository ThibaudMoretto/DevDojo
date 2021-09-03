import React from 'react';
import { Form, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DropdownMultiple = ({
  options,
  placeholder,
  name,
  value,
  onChange,
  label,
  id,
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
      fluid
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

DropdownMultiple.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

DropdownMultiple.defaultProps = {
  value: '',
};

export default DropdownMultiple;
