import React from 'react';
import "./FilterForm.css";

interface SelectProps {
  name: string,
  type: string,
  options: string[],
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

function Select({name, type, options, onChange}: SelectProps) {
  return (
    <fieldset>
      <label htmlFor={type}>{name} : </label>
      <select id={type} onChange={onChange}> 
        <option value="">Tous</option>
        {options.map((option: string) => <option value={option}>{option}</option>)}
      </select>
    </fieldset>
  );
}

export default Select;