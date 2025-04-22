import logoImage from "../assets/image/Leaf.png";
import { CiHeart } from "react-icons/ci";

import { IoSearch } from "react-icons/io5";
import CartIcon from "./CartIcon";
import { NavLink } from "react-router";

const MainHead = () => {
  return (

    <section className="py-4 max-w-full">
      <div  className="flex items-center justify-center gap-[305px] px-6 py-2 text-sm mx-auto">
        
        <div className="flex items-center gap-2">
          <img src={logoImage} alt="EcoBazar Logo" className="h-10" />
          <h1 className="text-3xl font-bold text-[#000000]">Ecobazar</h1>
        </div>

       
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-8 py-3 w-full focus:outline-none relative"
          />
          <IoSearch className="absolute m-3.5" />
          <button className="bg-green-500 text-white text-semibold px-4 py-2">
            Search
          </button>
        </div>

       
        <div className="flex justify-end items-center gap-2">
          <CiHeart className="flex items-center gap-1 cursor-pointer text-4xl" />
          <div className="hidden md:block border-l border-gray-400 h-6 mx-4">
          </div>
          <NavLink to='/shop'>
          <span>
          <CartIcon/>
        </span>
          </NavLink>
        
          <div>
            <h1 className="text-[0.8125rem] text-[#4D4D4D]">Shopping cart:</h1>
            <h1 className="font-bold text-[0.873rem]">$57.00</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHead;
