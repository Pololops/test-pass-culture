import React from 'react';

interface TextAreaProps {
  label: string,
  name: string,
  value: string,
  placeholder: string,
  onTextChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

function TextArea({label, name, value, placeholder, onTextChange}: TextAreaProps) {
  return (
    <fieldset>
      <label htmlFor={name}>{label} : </label>
      <textarea name={name} id={name} placeholder={placeholder} onChange={onTextChange} defaultValue={value} />
    </fieldset>
  );
}

export default TextArea;