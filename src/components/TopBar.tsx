import { CiLocationOn } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";

const TopBar = () => {
  return (
    <section>   
      
        <div  className="grid grid-cols-1 md:grid-cols-3 items-center px-6 py-2 text-sm mx-auto max-w-[82.4375rem]">
        <div className="md:col-span-1 flex items-center gap-2">
          <CiLocationOn className="text-lg" />
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </div>

        <div className="hidden md:block"></div>

        <div className="md:col-span-1 flex items-center justify-end gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-gray-800"> 
              Eng <FiChevronDown />
            </span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-gray-800"> 
              USD <FiChevronDown />
            </span>
          </div>
          <div className="hidden md:block border-l border-gray-400 h-6 mx-4"></div>
          <button className="cursor-pointer hover:text-gray-800">
            Sign in / Sign Up
          </button>
        </div>
        </div>
      
    </section>
  );
};

export default TopBar;