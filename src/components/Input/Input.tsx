import React from 'react';

interface InputProps {
  label: string,
  name: string,
  type: string,
  value: string,
  placeholder: string,
  disabled?: boolean,
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

function Input({label, name, type, value, placeholder, disabled, onChange}: InputProps) {
  return (
    <fieldset>
      <label htmlFor={name}>{label} : </label>
      <input type={type} name={name} id={name} value={value} placeholder={placeholder} />
    </fieldset>
  );
}

export default Input;