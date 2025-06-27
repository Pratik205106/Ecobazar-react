import logoImage from "../assets/image/Leaf.png";
import { CiHeart } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import CartIcon from "./CartIcon";
import { NavLink } from "react-router";
import { useCartStore } from "../store/useCartStore";

const MainHead = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <section className="py-4 w-full">
      <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:gap-[305px] gap-6 px-4 lg:px-6 py-2 text-sm max-w-[90rem] mx-auto">
        
        {/* Logo */}
        <div className="flex items-center gap-2 w-full lg:w-auto justify-start">
          <img src={logoImage} alt="EcoBazar Logo" className="h-10" />
          <h1 className="text-2xl lg:text-3xl font-bold text-[#000000]">Ecobazar</h1>
        </div>

        {/* Search Bar */}
        <div className="w-full lg:w-auto max-w-md flex border border-gray-300 rounded-md overflow-hidden relative">
          <IoSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-2 py-3 w-full focus:outline-none text-sm"
          />
          <button className="bg-green-500 text-white font-semibold px-4 py-2 text-sm">
            Search
          </button>
        </div>

        {/* Icons & Cart */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-2 w-full lg:w-auto">
          <CiHeart className="cursor-pointer text-3xl sm:text-4xl" />
          <div className="hidden md:block border-l border-gray-400 h-6 mx-2" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
            <NavLink to="/shop">
              <CartIcon />
            </NavLink>
            <NavLink to="/cart#cart-total-display">
              <h1 className="text-sm text-[#4D4D4D]">Shopping cart:</h1>
              <h1 className="font-bold text-sm">
                ${typeof totalPrice === "number" ? totalPrice.toFixed(2) : "0.00"}
              </h1>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHead;
