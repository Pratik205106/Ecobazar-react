import Card from "../ui/card";
import { PopularProduct } from "../utils/data";


const FeatureProduct = () => {
  return (
    <section
     className="h-[24.8125rem] w-[82.5rem] mx-auto m-[3.75rem]">
    <h1 className="text-[2rem] font-semibold">Featured Products</h1>
    <div className="grid grid-cols-5 mt-[2rem]">
       { PopularProduct.slice(0,5).map((value, index)=>( 
    <Card 
     key={index} 
     rate={value.rate} 
     title={value.title} 
     image={value.image}
     star={value.star as number}
     />
  ))}
    </div>
    </section>
  )
}

export default FeatureProduct;