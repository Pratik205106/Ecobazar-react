
import { IoMdSearch } from "react-icons/io";
import logoImage from "../assets/image/Leaf.png.png";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";


interface HeartButtonProps {
  label?: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({ label }) => {
  return (
    <button className="flex items-center gap-1 cursor-pointer">
      {label && <span>{label}</span>}
      <CiHeart className="text-3xl" />
    </button>
  );
};

const MainHead = () => {
  return (
    <div className="px-6 py-4">

      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <img src={logoImage} alt="" className="h-10" />
          <h1 className="text-3xl font-bold text-[#000000]"> Ecobazar </h1>
        </div>
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-8 py-3 w-full focus:outline-none relative"
          />
          <IoSearch className="absolute m-3.5" />
          <button className="bg-green-500 text-white px-4 py-2">
            <IoMdSearch className="text-lg" />
          </button>
        </div>
        <div className="flex flex-cols-3 justify-end items-center gap-4 ">
          <HeartButton />
          <BsHandbag className="text-3xl cursor-pointer" />
          <div>
            <h1 className="text-[0.8125rem]">Shopping cart:</h1>
            <h1 className="font-bold text-[0.873rem]">$57.00</h1>
          </div>
        </div>
      </div>

    </div>
  )
};

export default MainHead;