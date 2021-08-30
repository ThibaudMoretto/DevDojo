import React from 'react';
import { Form } from 'semantic-ui-react';

import './styles.scss';

const Field = ({
  value, type, name, placeholder, onChange, id, label, control, required,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <Form.Field
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      required={required}
      autoComplete="off"
      value={value}
      onChange={handleChange}
      control={control}
      type={type}
    />
  );
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
