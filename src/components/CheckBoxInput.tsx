import React, { ChangeEvent } from "react";

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
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <label className={containerClass}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        className={inputClass}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  )
}

export default CheckBoxInput;