/* eslint-disable @typescript-eslint/no-explicit-any */

export default function FormField({
  label,
  name,
  type = "text",
  error,
  register: registerFn,
  max,
  min,
  ...props
}: any) {
  // Example error display component
  const ErrorMessage = ({ error }: { error?: { message?: string } }) => {
    if (!error?.message) return null;
    return <p className="text-red-500 text-sm fixed z-30">{error.message}</p>;
  };

  return (
    <div className=" my-4  w-full">
      <div className="flex items-center gap-8 ">
        <label htmlFor={name} className="text-[18px] font-[400]">
          {label}
        </label>
      </div>
      <input
        type={type}
        className={`mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-[#692371] focus:border-[#692371] focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...registerFn(name)}
        {...props}
        max={max}
        min={min}
        // required=
      />
      <ErrorMessage error={error} />
    </div>
  );
}

// import React from "react";
// import { FieldError, UseFormRegister } from "react-hook-form";

// // Define props for the reusable form field component
// type FormFieldProps = {
//   label: string;
//   name: string;
//   type?: string;
//   error?: FieldError | undefined; // Error object from React Hook Form
//   register: UseFormRegister<any>; // The register function from React Hook Form
//   [key: string]: any; // Allow additional props
// };

// // Reusable form field component
// const FormField: React.FC<FormFieldProps> = ({
//   label,
//   name,
//   type = "text",
//   error,
//   register,
//   ...props
// }) => {
//   return (
//     <div className="mb-4">
//       {/* Label */}
//       <label
//         htmlFor={name}
//         className="block text-sm font-medium text-gray-700 mb-1"
//       >
//         {label}
//       </label>

//       {/* Input */}
//       <input
//         id={name}
//         type={type}
//         className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#692371] ${
//           error ? "border-red-500" : "border-gray-300"
//         }`}
//         {...register(name)}
//         {...props}
//       />

//       {/* Error Message */}
//       {error?.message && (
//         <p className="text-red-500 text-sm mt-1">{error.message}</p>
//       )}
//     </div>
//   );
// };

// export default FormField;
