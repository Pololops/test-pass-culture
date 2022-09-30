import React from 'react';

interface InputProps {
  label: string,
  name: string,
  type: string,
  value: string,
  readOnly?: boolean | undefined,
  placeholder: string,
  disabled?: boolean,
  readonly?: boolean,
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({label, name, type, value, placeholder, readonly, disabled, onInputChange}: InputProps) {
  

  return (
    <fieldset>
      <label htmlFor={name}>{label} : </label>
      {
        readonly ? 
        <input 
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={onInputChange}
          readOnly
        />
        :
        <input 
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={onInputChange}
        />
      }
    </fieldset>
  );
}

export default Input;