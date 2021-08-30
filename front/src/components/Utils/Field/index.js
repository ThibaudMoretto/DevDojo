import React from 'react';
import { Input } from 'semantic-ui-react';

import './styles.scss';

const Field = ({ value, type, name, placeholder, onChange }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  // const inputId = `field-${name}`;

  return (
    <div>
      <Input
        defaultValue={value}
        onChange={handleChange}
        // id={inputId}
        fluid
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
        autoComplete="off"
      />

      {/* <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label> */}
    </div>
  );
};

Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;
