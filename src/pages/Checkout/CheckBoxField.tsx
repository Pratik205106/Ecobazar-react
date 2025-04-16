import { InputHTMLAttributes } from "react"


interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
}

const CheckBoxField = ({
    label,
    ...rest}: Props) => {
  return (
    <section>
<label className="flex items-center space-x-2 mt-4">
      <input type="checkbox" {...rest} className="w-4 h-4 border border-[#CCCCCC] rounded-sm" />
      <span className="text-gray-700">{label}</span>
    </label>
    </section>
  )
}

export default CheckBoxField;