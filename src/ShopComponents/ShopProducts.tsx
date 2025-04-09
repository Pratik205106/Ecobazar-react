import { ProductType } from "../../types/types";
import Card from "../ui/card";
import { extraProducts, PopularProduct } from "../utils/data";

const ShopProducts = () => {
  const products = [
    extraProducts[0],
    PopularProduct[5], 
    PopularProduct[2],
    PopularProduct[6],
    extraProducts[3],
    PopularProduct[4],
    PopularProduct[7],
    PopularProduct[0],
    extraProducts[4],
    PopularProduct[8],
    PopularProduct[9],
    extraProducts[1],
    PopularProduct[6],
    PopularProduct[3],
    extraProducts[2],
    extraProducts[5],
  ];


  const getFixRate = (index: number, product: ProductType): string | undefined => {
    if (index === 12) {
      return product.fixRate;
    }
    return undefined;
  };

  return (
    <section>
      <main className="h-auto max-w-full mx-auto mt-8">
        <div className="grid grid-cols-4 gap-4">
          {products.map((product, index) => (
           <Card
           key={index}
           rate={product.rate}
           title={product.title}
           image={product.image}
           star={product.star as number}
           badge={index === 3 ? "Out of stock" : index === 11 ? "50% OFF" : undefined}
           fixRate={getFixRate(index, product)}  
         />
         
          ))}
        </div>
      </main>
    </section>
  );
};

export default ShopProducts;
