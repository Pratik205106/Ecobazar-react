import { ClientInfo } from "../utils/data";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Testimonials = () => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex gap-1 text-[#FF8A00]">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {[...Array(halfStars)].map((_, i) => (
          <FaStarHalfAlt key={`half-${i}`} />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-[#F2F2F2] mx-auto max-w-full py-[3.75rem] px-4">
      <h1 className="font-semibold text-2xl text-[#1A1A1A] max-w-[120rem] mx-auto lg:ml-[11.6875rem]">
        Client Testimonials
      </h1>

      <main className="flex flex-wrap justify-center gap-4 mx-auto lg:w-[82.5rem]">
        {ClientInfo.map((Client, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[45%] lg:w-[26.5rem] p-2"
          >
            <div className="bg-white rounded-lg shadow-md h-[15.875rem] mt-[4.125rem] mb-[3.75rem] flex flex-col justify-between p-6">
              <p className="text-[#4D4D4D] h-[5.25rem]">{Client.title}</p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-[0.75rem]">
                  <img
                    src={Client.image}
                    alt={Client.clientName}
                    className="h-[3.5rem] w-[3.5rem] rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{Client.clientName}</p>
                    <p className="text-[#999999] text-[0.875rem]">Customer</p>
                  </div>
                </div>

                {renderStars(5)}
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Testimonials;
