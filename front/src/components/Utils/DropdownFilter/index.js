import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'semantic-ui-react';

const DropdownFilter = ({
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
  const handleChange = (evt) => {
    onChange(evt.target.innerText.toLowerCase());
  };

  const nullValueToString = value === null ? '' : value;

  return (
    <Form.Field
      id={id}
      name={name}
      placeholder={placeholder}
      label={label}
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

DropdownFilter.propTypes = {
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

DropdownFilter.defaultProps = {
  value: '',
  required: false,
};

export default DropdownFilter;
