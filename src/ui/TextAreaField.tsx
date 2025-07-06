interface TextAreaFieldProps {
  placeholder: string;
  height?: string; // e.g., "h-28"
}

const TextAreaField = ({ placeholder, height = "h-28" }: TextAreaFieldProps) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`w-full ${height} px-4 py-2 border border-[#E5E5E5] rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#00B207]`}
    ></textarea>
  );
};

export default TextAreaField;
