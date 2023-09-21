import React from "react";

interface IInputTextProps {
  value: string;
  name: string;
  inputClass?: string;
  placeholder?: string;

  onChange: (newValue: string) => void;
}

const InputText = ({
  onChange,
  value,
  name,
  inputClass,
  placeholder
} : IInputTextProps) => (
  <input
    type="text"
    value={value}
    name={name}
    onChange={({ target: { value } }) => onChange(value)}
    className={inputClass}
    placeholder={placeholder}
  />
);

export default InputText;