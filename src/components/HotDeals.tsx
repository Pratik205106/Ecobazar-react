import greenApple from "../assets/image/GreenApples.png";
import Card from "../ui/card";
import { PopularProduct } from "../utils/data";


const HotDeals = () => {
  const selectedProducts = [
    ...PopularProduct.slice(2, 5),
    ...PopularProduct.slice(7, 10),
  ];

  const dealProducts = [...PopularProduct.slice(5,11)];

  return (
    <>
      <section className=" h-[73.1875rem] max-w-[82.4375rem] mx-auto">
        <div className="h-[2.375rem] max-w-[82.4375rem]">
          <h1 className="font-semibold text-[#1A1A1A] text-[2rem] mt-4">
            Hot Deals
          </h1>
        </div>
        <div className="flex">
          <div className="h-[40.875rem] w-[33rem] mx-auto shadow-md">
            <img src={greenApple} alt="" />
  
          </div>
          <div className="grid grid-cols-3 h-[20.4375rem] w-[16.5rem]">
            {selectedProducts.map((Product, index) => (
              <Card
                key={index}
                rate={Product.rate}
                title={Product.title}
                image={Product.image}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 h-[20.4375rem] w-[16.5rem]">
          {dealProducts.map((Product, index) => (
            <Card
              key={index}
              rate={Product.rate}
              title={Product.title}
              image={Product.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HotDeals;
