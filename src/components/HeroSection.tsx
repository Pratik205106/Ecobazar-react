import homeImg from "../assets/image/bgImage.jpg";
import vegBag from "../assets/image/vegBag.png";
import bgLeaf from "../assets/image/bgLeaf.png";
import { IoIosArrowRoundForward } from "react-icons/io";


const HeroSection = () => {
  return (
    <section className="">
    <div className="h-[600px] w-[1319px] mx-auto my-[24px]">
      <div className="grid grid-cols-2">
        <div className="w-[872px] relative ">
          <h1 className="text-5xl text-white leading-tight absolute top-[130px] left-[60px] font-bold">
            Fresh & Healthy
            <br />
            Organic Food
          </h1>

          <div className="absolute border-l-4 border-green-600 h-[65px] left-[60px] top-[270px]"></div>

          <div className="absolute top-[265px] left-[80px] flex items-center space-x-3">
            <h2 className="text-2xl text-white font-sans">Sale up to</h2>
            <button className="h-[38px] w-[108px] bg-orange-400 text-white rounded-md font-bold">
              30% OFF
            </button>
          </div>

          <h3 className="absolute text-white top-[315px] left-[80px]">
            Free shipping on all your order.
          </h3>

          <button className="absolute text-green-600 h-[51px] w-[191px] bg-white rounded-3xl top-[350px] left-[80px] font-semibold flex items-center justify-center space-x-2">
            <span>Shop now</span>
            <IoIosArrowRoundForward size={24} />
          </button>

          <img
            src={homeImg}
            alt="Organic Food"
            className="rounded-lg h-full object-cover  object-left"
          />
        </div>

        <div className="grid grid-rows-2 gap-6 ml-[236px]">
          <div className="h-[288px] w-[423px]">
            <div className="relative">
              <h1 className="absolute text-[20px] mt-[20px] ml-[30px] font-semibold leading-tight">
                SUMMER SALE
                <br />
                <span className="font-extrabold text-[40px]">75% OFF</span>
              </h1>

              <p className="absolute text-sm  mt-[100px] ml-[30px] text-gray-600">
                Only Fruit & Vegetable
              </p>

              <button className="absolute text-green-500 font-semibold mt-[140px] ml-[30px] text-lg flex items-center">
                Shop Now
                <IoIosArrowRoundForward size={24} />
              </button>

              <img src={vegBag} alt="Vegetables in Basket" />
            </div>
          </div>
          <div className="h-[288px] w-[423px]">
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