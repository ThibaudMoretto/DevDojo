import React from 'react';
import { Form } from 'semantic-ui-react';

import './styles.scss';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  id,
  label,
  control,
  required,
  autoComplete,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const nullValueToString = value === null ? '' : value;

  return (
    <Form.Field
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      required={required}
      value={nullValueToString}
      onChange={handleChange}
      control={control}
      type={type}
      autoComplete={autoComplete}
    />
  );
};

Field.defaultProps = {
  value: '',
};

export default Field;
