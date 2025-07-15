import Card from "../ui/card";
import { PopularProduct } from "../utils/data";

const FeatureProduct = () => {
  return (
    <section className="w-full max-w-[82.5rem] mx-auto my-[3.75rem]">
      <h1 className="text-[2rem] font-semibold">Featured Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-[2rem]">
        {PopularProduct.slice(0, 5).map((value) => (
          <Card
            key={value.id}
            id={value.id}
            rate={value.rate}
            price={value.price}
            title={value.title}
            image={value.image}
            star={
              typeof value.star === "string"
                ? parseFloat(value.star)
                : value.star
            }
             onNavigate={() => console.log(`Navigate to product ID: ${value.id}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureProduct;
