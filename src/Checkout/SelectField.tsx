import { FieldError, UseFormRegister } from "react-hook-form";

interface SelectFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  options: string[];
  register: UseFormRegister<any>;
  error?: FieldError;
  requiredMessage?: string;
  className?: string;
    id?: string;
}

const SelectField = ({
  label,
  name,
  placeholder,
  options,
  register,
  error,
  requiredMessage,
  className = "",
}: SelectFieldProps) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        {...register(name, { required: requiredMessage || `${label} is required` })}
        id={name}
        className={`border border-[#E6E6E6] rounded-md mt-1 px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500 ${className}`}
      >
        <option value="">{placeholder || "Select"}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default SelectField;
