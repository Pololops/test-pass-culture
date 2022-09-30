import React from 'react';

interface InputProps {
  label: string,
  name: string,
  type: string,
  value: string,
  placeholder: string,
  disabled?: boolean,
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({label, name, type, value, placeholder, disabled, onInputChange}: InputProps) {
  return (
    <fieldset>
      <label htmlFor={name}>{label} : </label>
      <input type={type} name={name} id={name} value={value} placeholder={placeholder} onChange={onInputChange} />
    </fieldset>
  );
}

export default Input;