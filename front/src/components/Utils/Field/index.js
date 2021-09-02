import React from 'react';
import PropTypes from 'prop-types';
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

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
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
  autoComplete: PropTypes.string,
};

Field.defaultProps = {
  value: '',
  required: false,
  autoComplete: 'off',
};

export default Field;
