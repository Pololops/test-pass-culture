import React from 'react';

interface SelectProps {
  label: string,
  type: string,
  createSelect?: boolean
  options: string[],
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

function Select({label, type, options, createSelect, onChange}: SelectProps) {
  return (
    <fieldset>
      <label htmlFor={type}>{label} : </label>
      <select id={type} onChange={onChange}> 
        {!createSelect && <option value="">Tous</option>}
        {options.map((option: string) => <option key={option} value={option}>{option}</option>)}
      </select>
    </fieldset>
  );
}

export default Select;