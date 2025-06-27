import homeImg from "../assets/image/bgImage.png";
import vegBag from "../assets/image/vegBag.png";
import bgLeaf from "../assets/image/bgLeaf.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Buttons from "../ui/Buttons";

const HeroSection = () => {
  return (
    <section className="">
      <div className="w-full lg:w-[82.4375rem] mx-auto my-6 px-4 lg:px-0 h-auto lg:h-[37.5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Main Banner */}
          <div className="relative w-full lg:w-[54.5rem]">
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight absolute top-32 sm:top-36 lg:top-[8.125rem] left-6 sm:left-10 lg:left-[3.75rem] font-bold z-10">
                Fresh & Healthy
                <br />
                Organic Food
              </h1>

              <div className="absolute left-6 sm:left-10 lg:left-[3.75rem] top-[16rem] sm:top-[17rem] lg:top-[16.875rem] border-l-4 border-green-600 h-16 lg:h-[4.0625rem] z-10"></div>

              <div className="absolute left-8 sm:left-12 lg:left-[5rem] top-[16.5rem] sm:top-[17.25rem] lg:top-[16.5625rem] flex items-center space-x-3 z-10">
                <h2 className="text-lg sm:text-xl text-white font-sans">Sale up to</h2>
                <button className="h-[2.375rem] w-[6.75rem] bg-orange-400 text-white rounded-md font-bold text-sm sm:text-base">
                  30% OFF
                </button>
              </div>

              <h3 className="absolute text-white text-sm sm:text-base top-[19rem] sm:top-[19.5rem] lg:top-[19.6875rem] left-8 sm:left-12 lg:left-[5rem] z-10">
                Free shipping on all your order.
              </h3>

              <div className="absolute top-[22rem] sm:top-[22.5rem] lg:top-[21.875rem] left-8 sm:left-12 lg:left-[5rem] z-10">
                <Buttons
                  label="Shop now"
                  bgColor="bg-[#FFFFFF]"
                  textColor="text-[#00B207]"
                  onClick={() => console.log("Button clicked!")}
                />
              </div>
            </div>

            <img
              src={homeImg}
              alt="Organic Food"
              className="rounded-lg h-[28rem] sm:h-[30rem] lg:h-full object-cover object-left bg-gradient-to-r from-green-900 to-green-400 w-full"
            />
          </div>

          {/* Right: Offers */}
          <div className="grid grid-rows-2 gap-6 ml-0 lg:ml-[14.75rem]">
            {/* Top Offer */}
            <div className="h-[18rem] w-full max-w-md lg:w-[423px]">
              <div className="relative h-full">
                <h1 className="absolute text-base sm:text-lg mt-5 ml-6 font-semibold leading-tight z-10">
                  SUMMER SALE
                  <br />
                  <span className="font-extrabold text-3xl sm:text-4xl">75% OFF</span>
                </h1>

                <p className="absolute text-sm mt-[100px] ml-6 text-gray-600 z-10">
                  Only Fruit & Vegetable
                </p>

                <button className="absolute text-green-500 font-semibold mt-[140px] ml-6 text-base sm:text-lg flex items-center z-10">
                  Shop Now
                  <IoIosArrowRoundForward size={24} />
                </button>

                <img src={vegBag} alt="Vegetables in Basket" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>

            {/* Bottom Offer */}
            <div className="h-[18rem] w-full max-w-md lg:w-[26.4375rem]">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-black/20 rounded-lg z-0"></div>

                <h4 className="absolute text-white top-[10%] left-1/2 -translate-x-1/2 text-xs sm:text-sm uppercase tracking-wider z-10">
                  Best Deal
                </h4>

                <h1 className="absolute text-white text-center left-1/2 -translate-x-1/2 top-[30%] font-semibold text-2xl sm:text-3xl lg:text-4xl leading-tight z-10">
                  <span className="whitespace-nowrap">Special Products</span>
                  <br />
                  <span className="whitespace-nowrap">Deal of the Month</span>
                </h1>

                <button className="absolute text-green-400 font-semibold left-1/2 -translate-x-1/2 bottom-[10%] text-lg sm:text-xl z-10 p-2 rounded flex items-center">
                  Shop Now
                  <IoIosArrowRoundForward size={24} />
                </button>

                <img
                  src={bgLeaf}
                  alt="Leaf Background"
                  className="w-full h-full object-cover rounded-lg absolute inset-0 z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
