import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownUnique = ({ options, placeholder, name, value, onChange }) => {
  const handleChange = (evt, data) => {
    // onChange(evt.target.textContent, name);
    onChange(data.value, name);
  };

  return (
    <Dropdown
      placeholder={placeholder}
      onChange={handleChange}
      fluid
      options={options}
      name={name}
      defaultValue={value}
    />
  );
};

export default DropdownUnique;
