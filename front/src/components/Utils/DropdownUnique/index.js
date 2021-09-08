import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'semantic-ui-react';

const DropdownUnique = ({
  options,
  placeholder,
  name,
  value,
  onChange,
  label,
  required,
  id,
  search,
}) => {
  const handleChange = (evt, data) => {
    onChange(data.value, name);
  };

  const nullValueToString = value === null ? '' : value;

  return (
    <Form.Field
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      autoComplete="off"
      lazyLoad
      clearable
      fluid
      defaultValue={nullValueToString}
      options={options}
      onChange={handleChange}
      control={Select}
      search={search}
      required={required}
    />
  );
};

DropdownUnique.propTypes = {
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
  required: PropTypes.bool,
  search: PropTypes.bool.isRequired,
};

DropdownUnique.defaultProps = {
  value: '',
  required: false,
};

export default DropdownUnique;
