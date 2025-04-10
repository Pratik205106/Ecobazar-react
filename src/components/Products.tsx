import Card from "../ui/card";
import { PopularProduct } from "../utils/data"


const Products = () => {
  return (
    <>
<section className="h-[44.625rem] max-w-[82.5rem] mx-auto mt-[3.75rem]">
<h1 className="text-[2.375rem] font-semibold mb-[2rem]">Popular Product</h1>
<div className="grid grid-cols-5 mx-[0.3125rem]">
  { PopularProduct.map((value, index)=>( 
    <Card 
    key={index}
    image={value.image} 
     title={value.title}
     rate={value.rate}
     fixRate={index === 0 ? value.fixRate : undefined} // Pass fixRate only for the first item
      star={value.star as number} 
 
      /> 
  ))}
 
</div>
</section>
</>
  )
}

export default Products; 