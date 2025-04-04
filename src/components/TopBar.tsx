import { CiLocationOn } from "react-icons/ci";


const TopBar = () => {
  return (
    <section className="border-b border-[#E5E5E5]">
      <div className="flex items-center justify-center px-6 py-2 text-sm h-[2.625rem] gap-[710px]">
        {/* Store Location */}
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-lg" />
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </div>

        {/* Language, Currency & Sign-in */}
        <div className="flex items-center gap-4">
        
        <div className="hidden md:flex items-center gap-2 cursor-pointer">
            <select className="bg-transparent border-none outline-none cursor-pointer">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
          </div>

          <div className="hidden md:flex items-center gap-2 cursor-pointer">
            <select className="bg-transparent border-none outline-none cursor-pointer">
              <option value="language">Eng</option>
              <option value="language">Nep</option>
              <option value="language">Hin</option>
            </select>
          </div>


          {/* Divider */}
          <div className="hidden md:block border-l border-gray-400 h-6"></div>

          {/* Sign-in / Sign-up */}
          <button className="cursor-pointer hover:text-gray-800">
            Sign in / Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
