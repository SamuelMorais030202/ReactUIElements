import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface IPasswordInputProps {
  value: string;
  name: string;
  inputClass?: string;
  containerClass?: string;
  placeholder: string;

  onChange: (newValue: string) => void;
}

const PassworInput = ({
  name,
  onChange,
  value,
  inputClass,
  containerClass,
  placeholder
} : IPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={containerClass}>
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={ ({ target: { value } }) => onChange(value) }
        className={inputClass}
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={ () => setShowPassword(!showPassword) }
        className="custom-button"
      >
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          color="blue"
          size="sm"
        />
      </button>
    </div>
  )
}

export default PassworInput;