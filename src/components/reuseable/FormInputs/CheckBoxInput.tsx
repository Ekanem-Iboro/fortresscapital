/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface CheckboxProps {
  id: string;
  label: string;
  disabled?: boolean;
  className?: string;
  name: string;
  register: any;
}

const CustomCheckbox: React.FC<CheckboxProps> = ({
  id,
  label,
  disabled = false,
  className = "",
  name,
  register,
}) => {
  return (
    <div className={`flex items-center gap-x-4 ${className}`}>
      <input
        type="checkbox"
        id={id}
        {...register(name, {
          setValueAs: (checked: boolean) => (checked ? "Yes" : "No"),
        })}
        disabled={disabled}
        className="mr-4 h-7 w-7 text-purple-600 focus:ring-purple-500 border-gray-300 rounded my-4"
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
