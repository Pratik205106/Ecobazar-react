import greenApple from "../assets/image/GreenApples.png";
import Card from "../ui/card";
import { PopularProduct } from "../utils/data";

const HotDeals = () => {
 const selectedProducts = [
    PopularProduct[2],
    PopularProduct[3],
    PopularProduct[4],
    PopularProduct[7],
    PopularProduct[8],
    PopularProduct[9],
  ];

  const dealProducts = [
    PopularProduct[5],
    PopularProduct[6],
    PopularProduct[15],
    PopularProduct[13],
    PopularProduct[14],
  ];

  return (
    <>
      <section className="h-[73.1875rem]">
        <div className="h-[2.375rem] max-w-[82.4375rem]">
          <h1 className="font-semibold text-[#1A1A1A] text-[2rem] mt-4">
            Hot Deals
          </h1>
        </div>
        <div className="flex">
          <div className="h-[40.875rem] w-[33rem] mx-auto shadow-md">
            <img src={greenApple} alt="Green Apple" />
          </div>
          <div className="grid grid-cols-3 h-[20.4375rem]">
            {selectedProducts.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                rate={product.rate}
                price={product.price}
                title={product.title}
                image={product.image}
                star={product.star}
                fixRate={product.fixRate}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 h-[20.4375rem]">
          {dealProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              rate={product.rate}
              price={product.price}
              title={product.title}
              image={product.image}
              star={product.star}
              fixRate={product.fixRate}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HotDeals;


