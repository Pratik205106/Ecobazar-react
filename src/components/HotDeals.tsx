// import greenApple from "../assets/image/GreenApples.png";
// import Card from "../ui/card";
// import { PopularProduct } from "../utils/data";

// const HotDeals = () => {
//  const selectedProducts = [
//     PopularProduct[2],
//     PopularProduct[3],
//     PopularProduct[4],
//     PopularProduct[7],
//     PopularProduct[8],
//     PopularProduct[9],
//   ];

//   const dealProducts = [
//     PopularProduct[5],
//     PopularProduct[6],
//     PopularProduct[15],
//     PopularProduct[13],
//     PopularProduct[14],
//   ];

//   return (
//     <>
//       <section className="h-[73.1875rem]">
//         <div className="h-[2.375rem] max-w-[82.4375rem]">
//           <h1 className="font-semibold text-[#1A1A1A] text-[2rem] mt-4">
//             Hot Deals
//           </h1>
//         </div>
//         <div className="flex">
//           <div className="h-[40.875rem] w-[33rem] mx-auto shadow-md">
//             <img src={greenApple} alt="Green Apple" />
//           </div>
//           <div className="grid grid-cols-3 h-[20.4375rem]">
//             {selectedProducts.map((product) => (
//               <Card
//                 key={product.id}
//                 id={product.id}
//                 rate={product.rate}
//                 price={product.price}
//                 title={product.title}
//                 image={product.image}
//                 star={product.star}
//                 fixRate={product.fixRate}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-5 h-[20.4375rem]">
//           {dealProducts.map((product) => (
//             <Card
//               key={product.id}
//               id={product.id}
//               rate={product.rate}
//               price={product.price}
//               title={product.title}
//               image={product.image}
//               star={product.star}
//               fixRate={product.fixRate}
//             />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default HotDeals;








import { useNavigate } from "react-router-dom";
import greenApple from "../assets/image/GreenApples.png";
import Card from "../ui/card";
import { PopularProduct } from "../utils/data";

const HotDeals = () => {
  const navigate = useNavigate();

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
    <section className="h-[73.1875rem] max-w-[82.4375rem] mx-auto px-4">
      <div className="h-[2.375rem]">
        <h1 className="font-semibold text-[#1A1A1A] text-[2rem] mt-4">
          Hot Deals
        </h1>
      </div>

      {/* Main content row */}
      <div className="flex mt-6">
        {/* Left Image */}
        <div className="h-[40.875rem] w-[33rem] shadow-md shrink-0">
          <img
            src={greenApple}
            alt="Green Apple"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Grid of Selected Products */}
        <div className="grid grid-cols-3 h-[40.875rem] flex-1">
          {selectedProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              rate={product.rate}
              price={product.price}
              title={product.title}
              image={product.image}
              star={Number(product.star)}
              fixRate={product.fixRate}
              onNavigate={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </div>
      </div>

      {/* Deal Products row */}
      <div className="grid grid-cols-5 h-[20.4375rem]">
        {dealProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            rate={product.rate}
            price={product.price} 
            title={product.title}
            image={product.image}
            star={Number(product.star)}
            fixRate={product.fixRate}
            onNavigate={() => navigate(`/product/${product.id}`)}
          />
        ))} 
      </div>     
    </section>                        
  );                                 
};                                   
                                    
export default HotDeals;               




// import { useNavigate } from "react-router-dom";
// import greenApple from "../assets/image/GreenApples.png";
// import Card from "../ui/card";
// import { PopularProduct } from "../utils/data";

// const HotDeals = () => {
//   const navigate = useNavigate();

//   const selectedProducts = [
//     PopularProduct[2],
//     PopularProduct[3],
//     PopularProduct[4],
//     PopularProduct[7],
//     PopularProduct[8],
//     PopularProduct[9],
//   ];

//   const dealProducts = [
//     PopularProduct[5],
//     PopularProduct[6],
//     PopularProduct[15],
//     PopularProduct[13],
//     PopularProduct[14],
//   ];

//   return (
//     <section className="max-w-[82.4375rem] mx-auto px-4 py-6">
//       <div className="mb-4">
//         <h1 className="font-semibold text-[#1A1A1A] text-2xl sm:text-3xl">
//           Hot Deals
//         </h1>
//       </div>

//       {/* Main content section */}
//       <div className="flex flex-col lg:flex-row">
//         {/* Left Image */}
//         <div className="w-full lg:w-[33rem] h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[40.875rem] shadow-md shrink-0">
//           <img
//             src={greenApple}
//             alt="Green Apple"
            
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Grid of Selected Products */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-1">
//           {selectedProducts.map((product) => (
//             <Card
//               key={product.id}
//               id={product.id}
//               rate={product.rate}
//               price={product.price}
//               title={product.title}
//               image={product.image}
//               star={Number(product.star)}
//               fixRate={product.fixRate}
//               onNavigate={() => navigate(`/product/${product.id}`)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Deal Products row */}
//       <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {dealProducts.map((product) => (
//           <Card
//             key={product.id}
//             id={product.id}
//             rate={product.rate}
//             price={product.price}
//             title={product.title}
//             image={product.image}
//             star={Number(product.star)}
//             fixRate={product.fixRate}
//             onNavigate={() => navigate(`/product/${product.id}`)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HotDeals;
