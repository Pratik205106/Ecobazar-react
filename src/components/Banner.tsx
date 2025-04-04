import { BannerData } from "../utils/data"


const Banner = () => {
  return (
    <>
    <section className="h-[33.5rem] max-w-[82.5rem] mx-auto  m-[3.75rem]">
      <div className="grid grid-cols-3">
{BannerData.map((banner, index)=> (
  <div key={index} className="relative">
<img src={banner.image} alt="" height={536} width={424} />
<div className="absolute bottom-0 left-0 right-0 top-[2.1875rem] font-medium text-sm text-center text-white">
  {banner.subtitle && (
    <h3 className="text-sm uppercase tracking-wider my-auto">
      {banner.subtitle}
      </h3> 
    )}
  <h1 className="font-semibold text-4xl">{banner.title }</h1>
  <div>
    <h1>{banner.countDown &&(
    <div className="flex space-x-4 font-semibold items-center justify-center">
    <div className="text-center">
      <span className="text-3xl">00</span>
      <br />
      <small className="text-sm">DAYS</small>
    </div>
  
    <span className="text-3xl mb-6">:</span>
  
    <div className="text-center">
      <span className="text-3xl">02</span>
      <br />
      <small className="text-sm">HOURS</small>
    </div>
  
    <span className="text-3xl mb-6">:</span>
  
    <div className="text-center">
      <span className="text-3xl">18</span>
      <br />
      <small className="text-sm">MINS</small>
    </div>
  
    <span className="text-3xl mb-6">:</span>
  
    <div className="text-center">
      <span className="text-3xl">46</span>
      <br />
      <small className="text-sm">SECS</small>
    </div>
  </div>
  
    )}</h1>
  </div>

  {banner.price &&(
  <p className="text-[1.125rem] font-normal mt-[0.7813rem]">Started at<span className="ml-2 text-[#FF8A00] text-[1.25rem]">{banner.price}</span></p>
)}

{banner.discount &&(
  <p className="text-[1.125rem] text-gray-900 mt-[0.5rem] p-[1.125rem]">Up to
  <span className="h-[2.4375rem] w-[6.25rem] rounded-md bg-[#1A1A1A] p-2 text-[#FCC900] ml-3">
    {banner.discount}
    </span>
    </p>
)}
  </div>

  </div> 
))}
      </div>
    </section>
    </>
  )
}

export default Banner;