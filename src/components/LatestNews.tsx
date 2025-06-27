import { PiTagThin } from "react-icons/pi";
import { LatestNews } from "../utils/data";
import { GoComment } from "react-icons/go";
import { FaUser } from "react-icons/fa";

const LatestNewsComponent = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "short" });

  return (
    <section className="max-w-[82.5rem] mx-auto my-[3.75rem] px-4">
      <h1 className="text-[2rem] text-center font-semibold">Latest News</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[2rem]">
        {LatestNews.map((news) => (
          <div key={news.id} className="relative w-full">
            {/* Image */}
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-auto object-cover"
            />

            {/* Calendar Date */}
            <div className="absolute h-[3.625rem] w-[3.625rem] top-60 left-4 bg-white rounded-md shadow-md">
              <div className="p-2 flex flex-col items-center">
                <div className="text-[#1A1A1A] font-medium text-lg">{day}</div>
                <div className="text-[#808080] font-medium text-sm">{month}</div>
              </div>
            </div>

            {/* News Content Box (attached to image) */}
            <div className="h-[10.625rem] w-full shadow bg-[#FFFFFF] border border-[#00000014]">
              <main className="h-[5.1875rem] w-[90%] mx-auto">
                <div className="flex">
                  <ul className="flex flex-wrap items-center gap-x-4 mt-6 text-sm">
                    <li className="flex items-center">
                      <PiTagThin className="mr-1" />
                      <span>{news.category}</span>
                    </li>
                    <li className="text-gray-400 flex items-center">
                      <FaUser className="mr-1" />
                      <h2 className="flex gap-1">
                        By <span className="text-black">Admin</span>
                      </h2>
                    </li>
                    <li className="flex items-center">
                      <GoComment />
                      <span className="ml-1">{news.commentCount}</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-1 text-[#1A1A1A] font-medium text-lg hover:text-[#2C742F]">
                  {news.title}
                </div>
              </main>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNewsComponent;
