import React from "react";

interface CheckboxProps {
  id: string;
  label: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  name?: string;
}

const CustomCheckbox: React.FC<CheckboxProps> = ({
  id,
  label,
  value,
  checked,
  onChange,
  disabled = false,
  className = "",
  name,
}) => {
  return (
    <div className={`flex items-center gap-7 ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="mr-4 h-7 w-7 text-blue-600 focus:ring-blue-500 border-gray-300 rounded my-4"
      />
      <label
        htmlFor={id}
        className={`text-md ${disabled ? "text-gray-400" : "text-gray-700"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
