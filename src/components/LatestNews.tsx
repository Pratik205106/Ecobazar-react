import { PiTagThin } from "react-icons/pi";
import LatestNews from "../utils/data";
import { GoComment } from "react-icons/go";
import { FaUser } from "react-icons/fa";


const LatestNewsComponent = () => {
  return (
    
     <section className="h-[35.25rem] w-[82.5rem] mx-auto my-[3.75rem]">   
  <h1 className="text-[2rem] text-center font-semibold">Latest News</h1>
  <div className="grid grid-cols-3 mt-[2rem]">
   {LatestNews.map((news, index)=>(
<div key={index} className="relative"> 
   <img src={news.image} alt={news.title} height={494} width={424}/>
   <div className="h-[10.625rem] w-[26.5rem] shadow bg-[#FFFFFF] border-[#00000014]">
<main className="h-[5.1875rem] w-[23.5rem] mx-6">
<div className="flex">
<ul className="flex items-center space-x-4 mt-6">
   <li className="flex items-center">
      <PiTagThin className="mr-1"/>
      <span>{news.category}</span>
   </li>
   <li className="text-gray-400 flex  items-center">
  <FaUser className="mr-1"/>
   <span>By Admin</span>
   </li>
   <li className="flex items-center">
    <GoComment/>
    <span className="ml-1">{news.commentCount}

    </span>
   </li>
</ul>
</div>
<div className="mt-1 text-[#1A1A1A] font-medium">
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