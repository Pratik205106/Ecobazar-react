import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  optional?: boolean;
}

const InputField = ({
  label,
  name,
  register,
  error,
  optional,
  className,
  ...rest
}: Props) => {
  return (
    <section>
      <div className="mb-4 w-full">
        <label className="block text-sm font-medium text-gray-700">
          {label} {optional && <span className="text-gray-400">(optional)</span>}
        </label>
        <input
          {...register(name)}
          {...rest}
          className={`border border-[#E6E6E6] rounded-md mt-1 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 ${className}`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    </section>
  );
};

export default InputField;
