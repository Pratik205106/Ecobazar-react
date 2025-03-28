import { DiscountData } from "../utils/data";




const DiscountBanner = () => {
  return (
 <section>
    <div>
    <div className=" max-w-[1320px] max-h-[358px] overflow-hidden mx-auto ">
      <img src={DiscountData.image}  alt={DiscountData.title} className="mx-auto object-cover rounded-2xl " />
    </div>     </div>
 </section>
  )
}

export default DiscountBanner;