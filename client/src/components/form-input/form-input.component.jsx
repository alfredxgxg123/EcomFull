import React from 'react';
import Group from './styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <Group>
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
        label ? (
          <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
          </label>
        ) : null
    }
  </Group>
);

export default FormInput;
