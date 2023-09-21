import React from "react";

interface ISelectOptions {
  label: string;
  value: string;
}

interface ISelectInputProps {
  options: ISelectOptions[];
  value: string;
  onChange: (newValue : string) => void;
  placeholder?: string;
  inputClass?: string;
  name?: string;
}

const SelectInput = ({
  onChange,
  options, 
  value,
  inputClass,
  name,
  placeholder,
} : ISelectInputProps) => {
  return (
    <select
      name={name}
      className={inputClass}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option
          value={option.value}
          key={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SelectInput;