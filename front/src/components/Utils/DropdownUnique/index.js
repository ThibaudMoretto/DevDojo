import React from 'react';
import { Form, Select } from 'semantic-ui-react';

const DropdownUnique = ({
  options, placeholder, name, value, onChange, label, required, id, search,
}) => {
  const handleChange = (evt, data) => {
    // onChange(evt.target.textContent, name);
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
      clearable
      defaultValue={value}
      options={options}
      onChange={handleChange}
      control={Select}
      search={search}
    />
  );
};

export default DropdownUnique;
