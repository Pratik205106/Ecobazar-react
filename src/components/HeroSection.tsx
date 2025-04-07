import homeImg from "../assets/image/bgImage.png";
import vegBag from "../assets/image/vegBag.png";
import bgLeaf from "../assets/image/bgLeaf.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Buttons from "../ui/Buttons";


const HeroSection = () => {
  return (
    <section className="">
      <div className="h-[37.5rem] w-[82.4375rem] mx-auto my-[1.5rem]">
        <div className="grid grid-cols-2">
          <div className="w-[54.5rem] relative ">
          <div className="relative">
  <h1 className="text-5xl text-white leading-tight absolute top-[8.125rem] left-[3.75rem] font-bold">
    Fresh & Healthy
    <br />
    Organic Food
  </h1>

  <div className="relative">
  <div className="absolute left-[3.75rem] top-[16.875rem] border-l-4 border-green-600 h-[4.0625rem]"></div>

  <div className="absolute left-[5rem] top-[16.5625rem] flex items-center space-x-3">
    <h2 className="text-2xl text-white font-sans">Sale up to</h2>
    <button className="h-[2.375rem] w-[6.75rem] bg-orange-400 text-white rounded-md font-bold">
      30% OFF
    </button>
  </div>

  <h3 className="absolute text-white top-[19.6875rem] left-[5rem]">
    Free shipping on all your order.
  </h3>
</div>


  <h3 className="absolute text-white top-[19.6875rem] left-[5rem]">
    Free shipping on all your order.
  </h3>

  <Buttons 
  label="Shop now"
  bgColor="bg-[#FFFFFF]"
  textColor="text-[#00B207]"
  onClick={() => console.log("Button clicked!")}
  className="top-[21.875rem] left-[5rem]"
/>
</div>


            <img
              src={homeImg}
              alt="Organic Food"
              className="rounded-lg h-full object-cover  object-left bg-gradient-to-r from-green-900 to-green-400"
            />
          </div>

          <div className="grid grid-rows-2 gap-6 ml-[14.75rem]">
            <div className="h-[18rem] w-[423px]">
              <div className="relative">
                <h1 className="absolute text-[1.25rem] mt-[1.25rem] ml-[1.875rem] font-semibold leading-tight">
                  SUMMER SALE
                  <br />
                  <span className="font-extrabold text-[2.5rem]">75% OFF</span>
                </h1>

                <p className="absolute text-sm  mt-[100px] ml-[1.875rem] text-gray-600">
                  Only Fruit & Vegetable
                </p>

                <button className="absolute text-green-500 font-semibold mt-[140px] ml-[1.875rem] text-lg flex items-center">
                  Shop Now
                  <IoIosArrowRoundForward size={24} />
                </button>

                <img src={vegBag} alt="Vegetables in Basket" />
              </div>
            </div>
            <div className="h-[18rem] w-[26.4375rem]">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

                <h4 className="absolute text-white top-[10%] left-1/2 -translate-x-1/2 text-sm uppercase tracking-wider z-10">
                  Best Deal
                </h4>

                <h1 className="absolute text-white text-center left-1/2 -translate-x-1/2 top-[30%] font-semibold text-4xl leading-tight z-10">
                  <span className="whitespace-nowrap">Special Products</span>
                  <br />
                  <span className="whitespace-nowrap">Deal of the Month</span>
                </h1>

                <button className="absolute text-green-400 font-semibold left-1/2 -translate-x-1/2 bottom-[10%] text-2xl z-10 p-2 rounded flex items-center">
                  Shop Now
                  <IoIosArrowRoundForward size={24} />
                </button>

                <img
                  src={bgLeaf}
                  alt="Leaf Background"
                  className="w-full h-full object-cover rounded-lg absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection;