import Buttons from "../ui/Buttons";
import { DiscountData } from "../utils/data";




const DiscountBanner = () => {
  return (
 <section>
    <div>
    <div className=" max-w-[82.5rem] max-h-[22.375rem] overflow-hidden rounded-b-xl mx-auto relative">
      <img src={DiscountData.image}  alt={DiscountData.title} className="mx-auto object-cover rounded-2xl " />
      <div className="absolute top-0 left-0 p-8  ml-[51.75rem] text-white">
            <h2 className="h-[1rem] w-[7rem] text-semibold font-bold mb-2 ">
              {DiscountData.title}
            </h2>
            <div className="flex items-center gap-2">
  <div className="text-bold text-[3.5rem] mt-[0.75rem] text-orange-400">
    {DiscountData.discount}
  </div>
  <span className="mt-3 text-base text-[3.5rem]">Off</span>
</div>
           
            <p className="h-[3rem] w-[27.5625rem] mt-[1rem] mr-[3.1875rem]">
              {DiscountData.note}
            </p>

            <Buttons 
  label="Shop now"
  bgColor="bg-[#00B207]"
  textColor="text-[#FFFFFF]"
  onClick={() => console.log("Button clicked!")}
  className="mt-[1.75rem]"
/>
          </div>

    </div>    
     </div>
 </section>
  )
}

export default DiscountBanner;