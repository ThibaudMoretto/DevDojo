import React from 'react';
import { Form, Select } from 'semantic-ui-react';

const DropdownUnique = ({
  options, placeholder, name, value, onChange, label, required, id, search,
}) => {
  const handleChange = (evt, data) => {
    // onChange(evt.target.textContent, name);
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

DropdownUnique.defaultProps = {
  value: '',
};

export default DropdownUnique;
