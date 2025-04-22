import Card from "../ui/card";
import { PopularProduct } from "../utils/data";


const Products = () => {
  return (
    <>
      <section className="h-[44.625rem] max-w-[82.5rem] mx-auto mt-[3.75rem]">
        <h1 className="text-[2.375rem] font-semibold mb-[2rem]">Popular Product</h1>
        <div className="grid grid-cols-5 mx-[0.3125rem]">
          {PopularProduct.map((value) => (
            <Card
              key={value.id} // Use the product id as the key
              id={value.id}  // Pass id to the Card component
              image={value.image}
              title={value.title}
              rate={value.rate}
              fixRate={value.fixRate} // Pass fixRate if available
              star={value.star as number}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
