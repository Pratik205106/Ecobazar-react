import { SelectHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: string[];
  register: UseFormRegister<any>;
  error?: FieldError;
  className?: string;
}

const SelectField = ({
  label,
  name,
  options,
  register,
  error,
  className,
  ...rest
}: Props) => {
  return (
    <section>
      <div className="mb-4 w-full">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <select
          {...register(name)}
          {...rest}
          className={`border border-[#E6E6E6] rounded-md mt-1 px-3 text-[#999] focus:outline-none focus:ring-green-500 focus:border-green-500 ${className}`}
        >
          <option value="">Select</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    </section>
  );
};

export default SelectField;
