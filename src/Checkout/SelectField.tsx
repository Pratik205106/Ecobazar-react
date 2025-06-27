// import { SelectHTMLAttributes } from "react";
// import { FieldError, UseFormRegister } from "react-hook-form";

// interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
//   label: string;
//   name: string;
//   options: string[];
//   register: UseFormRegister<any>;
//   error?: FieldError;
//   className?: string;
//   placeholder?: string;
//   requiredMessage?: string;
// }

// const SelectField = ({
//   label,
//   name,
//   options,
//   register,
//   error,
//   className = "",
//   placeholder = "Select an option",
//   requiredMessage = "This field is required",
//   ...rest
// }: SelectFieldProps) => {
//   const selectId = rest.id || name;

//   return (
//     <div className="mb-4 w-full">
//       <label htmlFor={selectId} className="block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <select
//         id={selectId}
//         {...register(name, { required: requiredMessage })}
//         {...rest}
//         className={`border border-[#E6E6E6] rounded-md mt-1 px-3 py-2 text-[#333] focus:outline-none focus:ring-green-500 focus:border-green-500 ${className}`}
//       >
//         <option value="">{placeholder}</option>
//         {options.map((opt) => (
//           <option key={opt} value={opt}>
//             {opt}
//           </option>
//         ))}
//       </select>
//       {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
//     </div>
//   );
// };

// export default SelectField;
import { SelectHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: string[];
  register: UseFormRegister<any>;
  error?: FieldError;
  className?: string;
  placeholder?: string;
  requiredMessage?: string;
}

const SelectField = ({
  label,
  name,
  options,
  register,
  error,
  className = "",
  placeholder = "Select an option",
  requiredMessage,
  ...rest
}: SelectFieldProps) => {
  const selectId = rest.id || name;

  return (
    <div className="mb-4 w-full">
      <label htmlFor={selectId} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={selectId}
        {...register(name, requiredMessage ? { required: requiredMessage } : {})}
        {...rest}
        className={`border border-[#E6E6E6] rounded-md mt-1 px-3 py-2 text-[#333] focus:outline-none focus:ring-green-500 focus:border-green-500 ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default SelectField;                 
