import { BannerData } from "../utils/data"


const Banner = () => {
  return (
    <section>
      <div className="h-[33.5rem] w-[82.5rem] grid grid-cols-3 mx-auto my-[3.75rem]">
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
  </div>

  </div> 
))}
      </div>
    </section>
  )
}

export default Banner;