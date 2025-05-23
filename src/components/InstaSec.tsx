import { InstaPost } from "../utils/data";


const InstaSec = () => {
  return (
    <section>
<main className="h-[16.875rem] max-w-[82.5rem] mx-auto">
<h1 className="font-semibold text-[2rem] text-gray-900 text-center ">Follow us on Instagram</h1>
<div className="flex gap-6 mx-auto">
  {InstaPost.map((post, index)=>(
    <div key={index}>
      <img src={post.image} alt="" className="h-[12.5rem] w-[12.5rem] mt-[3.75rem] "/>
    </div>
  ))}
</div>
</main>
</section>
  )
}

export default InstaSec;