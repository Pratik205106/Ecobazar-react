import { InstaPost } from "../utils/data";


const InstaSec = () => {
  return (
<main className="h-[16.875rem] w-[82.5rem] mx-auto">
<h1 className="font-semibold text-[2rem] text-gray-900 text-center ">Follow us on Instagram</h1>
<div className="flex gap-6 mx-auto">
  {InstaPost.map((post, index)=>(
    <div>
      <img src={post.image} alt="" className="h-[12.5rem] w-[12.5rem] mt-[3.75rem] "/>
    </div>
  ))}
</div>
</main>
  )
}

export default InstaSec;