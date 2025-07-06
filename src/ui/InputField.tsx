interface InputFieldProps {
  type: string;
  placeholder: string;
  width?: string; // e.g., "w-[434px]", "w-full"
}

const InputField = ({ type, placeholder, width = "w-full" }: InputFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`h-12 px-4 border border-[#E5E5E5] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#00B207] ${width}`}
    />
  );
};

export default InputField;
