import { IoIosArrowRoundForward } from "react-icons/io"


interface Props{
    title:string;
}
const ShopButton = ({title}:Props) => {
  return (
    <main>
        <button className="absolute text-green-600 h-[3.1875rem] w-[11.9375rem] bg-white rounded-3xl top-[21.875rem] left-[5rem] font-semibold flex items-center justify-center space-x-2">
              <span>{title}</span>
              <IoIosArrowRoundForward size={24} />
            </button>
    </main>
  )
}

export default ShopButton;