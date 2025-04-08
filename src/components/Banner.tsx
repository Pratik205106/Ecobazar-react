import Buttons from "../ui/Buttons";
import { BannerData } from "../utils/data";

const Banner = () => {
  return (
    <section className="h-[33.5rem] max-w-[82.5rem] mx-auto m-[3.75rem]">
      <div className="grid grid-cols-3 gap-4">
        {BannerData.map((banner, index) => (
          <div key={index} className="relative">
            <img src={banner.image} alt={banner.title} height={536} width={424} />

            <div className="absolute inset-0 top-[2.1875rem] text-white text-center font-medium">
              {banner.subtitle && (
                <h3 className="text-sm uppercase tracking-wider">{banner.subtitle}</h3>
              )}
              <h1 className="font-semibold text-4xl">{banner.title}</h1>

              {banner.countDown && (
                <div className="flex space-x-4 font-semibold items-center justify-center my-4">
                 {["00", "02", "18", "46"].map((time, i) => (
  <div key={i} className="flex items-center">
    <div className="text-center">
      <span className="text-3xl">{time}</span>
      <br />
      <small className="text-sm">
        {["DAYS", "HOURS", "MINS", "SECS"][i]}
      </small>
    </div>
    {i < 3 && <span className="text-3xl mx-2 mb-8">:</span>} {/* Show colon except after last item */}
  </div>
))}

                </div>
              )}

              {banner.price && (
                <p className="text-[1.125rem] font-normal mt-8">
                  Started at
                  <span className="ml-2 text-[#FF8A00] text-[1.25rem]">{banner.price}</span>
                </p>
              )}

              {banner.discount && (
                <p className="text-[1.125rem] text-gray-900 mt-2 p-[1.125rem]">
                  Up to
                  <span className="ml-3 bg-[#1A1A1A] text-[#FCC900] p-2 rounded-md inline-block">
                    {banner.discount}
                  </span>
                </p>
              )}
            </div>

            <Buttons
              label="Shop now"
              bgColor="bg-[#FFFFFF]"
              textColor="text-[#00B207]"
              onClick={() => console.log("Button clicked!")}
              className="absolute bottom-[295px] left-1/2 transform -translate-x-1/2"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
