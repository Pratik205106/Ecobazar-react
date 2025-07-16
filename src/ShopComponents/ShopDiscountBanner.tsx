import { Link } from "react-router";
import bannerImg from "../assets/image/mixVeg.jpg";
import Buttons from "../ui/Buttons";
import { BannerData } from "../utils/data";

const ShopDiscountBanner = () => {
  const banner = BannerData[0];

  const currentTime = {
    day: "07",
    hours: "12",
    minutes: "34",
    seconds: "56",
  };
 
  return (
    <section className="mt-6">
      <div className="relative w-full max-w-[82.5rem] h-[18rem] sm:h-[20rem] md:h-[22rem] lg:h-[22.375rem] rounded-md overflow-hidden mx-auto">
        <img
          src={bannerImg}
          style={{ transform: "scaleX(-1)" }} 
          alt="Mix Vegetables Discount Banner"    
          role="img"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-30 px-4 sm:px-10 lg:pl-[60px] text-white">
          {banner.subtitle && (
            <h3 className="text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2">
              {banner.subtitle}
            </h3>
          )}

          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">
            {banner.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-semibold text-[#00B207]">
            {[
              currentTime.day,
              currentTime.hours,
              currentTime.minutes,
              currentTime.seconds,
            ].map((time, i) => (
              <div key={i} className="flex items-center">
                <div className="text-center">
                  <span className="text-xl sm:text-2xl md:text-3xl">
                    {time}
                  </span>
                  <br />
                  <small className="text-[10px] sm:text-xs text-[#808080]">
                    {["DAY", "HOURS", "MINS", "SECS"][i]}
                  </small>
                </div>
                {i < 3 && (
                  <span className="text-xl sm:text-2xl md:text-3xl mx-1 sm:mx-2 mb-5">
                    :
                  </span>
                )}
              </div>
            ))}
            {/* <a href="/shop" className="mt-2 sm:mt-4">
              <Buttons
                label="Shop now"
                bgColor="bg-[#00B207]"
                textColor="text-white"
                className="mt-2 sm:mt-[2.875rem] ml-0 lg:ml-[-17.5rem]"
              />
            </a> */}

            <Link to="/shop" className="mt-2 sm:mt-4">
              <Buttons
                label="Shop now"
                bgColor="bg-[#00B207]"
                textColor="text-white"
                className="mt-2 sm:mt-[2.875rem] ml-0 lg:ml-[-17.5rem]"
              />
            </Link>

          </div>
        </div>

        <div className="absolute top-6 right-6 sm:right-10 lg:right-[10rem] flex items-center justify-center flex-col w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] lg:w-[6.25rem] lg:h-[6.25rem] rounded-full bg-[#FF8A00] text-white text-center">
          <h2 className="font-semibold text-lg sm:text-xl lg:text-3xl">56%</h2>
          <h3 className="font-medium text-sm sm:text-base lg:text-xl">OFF</h3>
        </div>
      </div>
    </section>
  );
};

export default ShopDiscountBanner;
