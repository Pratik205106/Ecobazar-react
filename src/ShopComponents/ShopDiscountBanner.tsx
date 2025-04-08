import bannerImg from "../assets/image/mixVeg.jpg";
import Buttons from "../ui/Buttons";
import { BannerData } from "../utils/data";

const ShopDiscountBanner = () => {
  const banner = BannerData[0]; // Only show the first banner

  return (
    <section className="mt-[1.5rem]">
      <div className="relative h-[22.375rem] w-[82.5rem] rounded-md overflow-hidden mx-auto">
        <img src={bannerImg} style={{ transform: "scaleX(-1)" }} alt="Discount Banner" />

        <div className="absolute inset-0 flex flex-col justify-center text-white bg-black bg-opacity-30 pl-[60px]">
  {banner.subtitle && (
    <h3 className="text-sm uppercase tracking-wider mb-2">{banner.subtitle}</h3>
  )}
  
  <h1 className="font-semibold text-4xl mb-4">{banner.title}</h1>

  {banner.countDown && (
    <div className="flex space-x-4 font-semibold items-center text-[#00B207]">
      {["00", "02", "18", "46"].map((time, i) => (
        <div key={i} className="flex items-center">
          <div className="text-center">
            <span className="text-3xl">{time}</span>
            <br />
            <small className="text-sm text-[#808080]">
              {["DAYS", "HOURS", "MINS", "SECS"][i]}
            </small>
          </div>
          {i < 3 && <span className="text-3xl mx-2 mb-8">:</span>}
        </div>
      ))}
      <a href="/shop" className="mt-[1.75rem]">
  <Buttons
    label="Shop now"
    bgColor="bg-[#00B207]"
    textColor="text-[#FFFFFF]"
    className="mt-[2.875rem] ml-[-17.5rem]"
  />
</a>

    </div>
  )}
</div>

<div className="h-[6.25rem] w-[6.25rem] rounded-full bg-[#FF8A00] text-[#FFFFFF] absolute inset-0 flex items-center justify-center flex-col mx-[500px] my-28">
  <h2 className="font-semibold text-center text-3xl">56%</h2>
  <h3 className="font-medium text-center text-xl mr-2">OFF</h3>
</div>

      </div>
    </section>
  );
};

export default ShopDiscountBanner;
