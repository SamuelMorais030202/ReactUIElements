import React from "react";

interface ICheckBoxInputProps {
  label: string;
  checked: boolean;
  name?: string;
  onChange: (isChecked : boolean) => void;
  inputClass?: string;
  containerClass?: string;
} 

const CheckBoxInput = ({
  checked,
  label,
  onChange,
  name,
  inputClass,
  containerClass
} : ICheckBoxInputProps) => {
  return (
    <label className={containerClass}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        className={inputClass}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {label}
    </label>
  )
}

export default CheckBoxInput;