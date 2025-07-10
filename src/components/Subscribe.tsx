import { SocialMediaData } from "../utils/data";

const Subscribe = () => {
  return (
    <section className="bg-[#E6E6E6] mt-[3.75rem] max-w-full h-auto lg:h-[10.125rem] px-4 py-6 lg:px-0 lg:py-0 relative">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mx-[12rem] py-8">
        {/* Text Section */}
        <div className="w-full lg:w-[28rem] text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="font-semibold text-[1.5rem] text-[#1A1A1A]">
            Subcribe our Newsletter
          </h1>
          <p className="text-[#999999] mt-[0.25rem] text-sm">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        {/* Input and Button */}
        <div className="relative w-full max-w-[33.5rem] h-[3.25rem] mb-6 lg:mb-0">
          <input
            type="text"
            placeholder="Your email address"
            className="w-full h-full rounded-[2.875rem] pr-[10.125rem] px-4"
          />
          <button className="absolute right-0 top-0 h-full w-[10.125rem] bg-[#00B207] text-white text-[1rem] rounded-[2.6875rem]">
            Subscribe
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-2">
          {SocialMediaData.map((media, index) => (
            <div key={index}>
              <div
                className={`flex items-center justify-center rounded-full p-1 ${
                  index === 0 ? "bg-green-600" : ""
                }`}
              >
                <img
                  src={media.image}
                  alt="social-media-icon"
                  className="w-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;


