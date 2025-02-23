/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type SelectFieldProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[]; // Array of options
  error?: FieldError | undefined; // Error object from React Hook Form
  register: UseFormRegister<any>; // The register function from React Hook Form
  [key: string]: any; // Allow additional props
  isRequired?: boolean; //
};

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  error,
  register,
  ...props
}) => {
  return (
    <div className="mb-4">
      {/* Label */}
      <div className="flex items-center gap-8 ">
        <label htmlFor={name} className="text-[18px] font-[400] mb-2">
          {label}
        </label>
      </div>

      {/* Select */}
      <select
        id={name}
        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2  focus:ring-[#692371] ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...register(name)}
        {...props}
        // required={isRequired}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Error Message */}
      {error?.message && (
        <p className="text-red-500 text-sm fixed z-30">{error.message}</p>
      )}
    </div>
  );
};

export default SelectField;
