import { BannerData } from "../utils/data"


const Banner = () => {
  return (
    <section className="h-[33.5rem] w-[82.5rem] mx-auto  m-[3.75rem]">
      <div className="h-[33.5rem] w-[82.5rem] grid grid-cols-3">
{BannerData.map((banner, index)=> (
  <div key={index} className="relative">
<img src={banner.image} alt="" height={536} width={424} />
<div className="absolute bottom-0 left-0 right-0 font-medium text-sm text-center mb-[30.4375rem] text-white">
  {banner.subtitle && (
    <h3 className="text-sm uppercase tracking-wider">
      {banner.subtitle}
      </h3> 
    )}
  <h1 className="font-semibold text-4xl">{banner.title }</h1>
  <div>
    <h1>{banner.countDown &&(
      <div className="flex space-x-4 text-lg font-semibold">
        <span>00 <br /><small className="text-xs">DAYS</small> </span>
        <span>02 <br /><small className="text-xs">HOURS</small> </span>
        <span>18 <br /><small className="text-xs">MINS</small> </span>
        <span>46 <br /><small className="text-xs">SECS</small> </span>
      </div>
    )}</h1>
  </div>

  {banner.price &&(
  <p className="text-sm font-normal">Started at<span className="ml-2">{banner.price}</span></p>
)}

{banner.discount &&(
  <p className="text-lg text-gray-900">Up to
  <span className="h-[2.4375rem] w-[6.25rem] rounded-md bg-[#1A1A1A] text-[#FCC900] ml-3">
    {banner.discount}
    </span>
    </p>
)}
  </div>

  </div> 
))}
      </div>
    </section>
  )
}

export default Banner;