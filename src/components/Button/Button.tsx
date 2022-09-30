import React from 'react';

interface InputProps {
  label: string,
  type: "button" | "submit" | "reset" | undefined,
}

function Button({label, type}: InputProps) {
  return (
      <button type={type}>{label}</button>
  );
}

export default Button;