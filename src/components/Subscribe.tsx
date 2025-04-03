import { SocialMediaData } from "../utils/data";


const Subscribe = () => {
  return (
   
    <section className="h-[10.125rem] max-w-[120rem] bg-[#E6E6E6] mt-[3.75rem]">
        <div className="ml-[12rem]">
<div className="h-[5.125rem] w-[28rem] pt-[40px]">
<h1 className="font-semibold text-[1.5rem] text-[#1A1A1A]">Subcribe our Newsletter</h1>
<p className="text-[#999999] mt-[0.25rem]">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
</div>
<div className="h-[3.25rem] w-[33.5rem] flex ml-[30.375rem] relative">
  <input type="text" placeholder="Your email address" className="w-[30.75rem] h-[3.25rem] rounded-[2.875rem] absolute right-0 top-0"/>

<button className="h-[3.25rem] w-[10.125rem] bg-[#00B207] text-[#FFFFFF] text-[1rem] rounded-[2.6875rem] absolute right-0">Subscribe</button>
</div>

</div>
<div className="h-[2.5rem] w-[11.5rem] flex gap-2 mx-[81.5rem]">
{SocialMediaData.map((media, index)=>
(
  <div key={index} className="">
    <img src={media.image} alt="" className="h-10 w-10"/>
  </div>
))}
</div>
    </section>
  )
}

export default Subscribe;