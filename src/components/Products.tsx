import Card from "../ui/card";
import { PopularProduct } from "../utils/data"


const Products = () => {
  return (
<section className="h-[44.625rem] w-[82.5rem] mx-auto mt-[3.75rem]">
<h1 className="text-[2.375rem] font-semibold mb-[2rem]">Popular Product</h1>
<div className="grid grid-cols-5 ">
  { PopularProduct.map((value, index)=>( 
    <Card key={index} number={value.number} title={value.title} image={value.image} />
  ))}
 
</div>
</section>
  )
}

export default Products; 