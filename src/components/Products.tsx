import { PopularProduct } from "../utils/data"


const Products = () => {
  return (
<section className="ml-[11.875rem] mt-[3.625rem]">
<h1 className="text-[2.375rem] font-bold mb-[2rem]">Popular Product</h1>
<div className="flex flex-wrap ">
  { PopularProduct.map((value, index)=>( 
    <div key={index} className="border">
    <img src={value.image} height={327} width={264} className="object-cover rounded-lg " alt="" />
    <div className='mt-2 text-lg ml-[0.75rem]'>
    <p className="text-gray-700">{value.title}</p> 
    <div>
    <p>{value.number}</p>
  </div>  
  </div>  
  </div>  
  ))}
</div>
</section>
  )
}

export default Products; 