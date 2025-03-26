import { PopularProduct } from "../utils/data"


const Products = () => {
  return (
<section className="ml-[190px]">
<h1>Popular Product</h1>
<div className="grid grid-cols-2">
  { PopularProduct.map((value, index)=>(
    <div key={index}>
    <img src={value.image} height={327} width={264} className="object-cover rounded-lg shadow-md shadow-green-600" alt="" />
    <p className='mt-2 text-lg font-medium'>{value.title}</p>
  </div>
  ))}
</div>
</section>
  )
}

export default Products;