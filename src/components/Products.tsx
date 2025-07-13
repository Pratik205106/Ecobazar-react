// import Card from "../ui/card";
// import { PopularProduct } from "../utils/data";


// const Products = () => {
//   return (
//     <>
//       <section className="max-w-[82.5rem] mx-auto mt-[3.75rem] px-4">
//   <h1 className="text-[2.375rem] font-semibold mb-[2rem]">Popular Product</h1>
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 mx-[-1rem]">
//     {PopularProduct.map((value) => (
//       <Card
//         key={value.id}
//         id={value.id}
//         image={value.image}
//         title={value.title}
//         rate={value.rate}
//         fixRate={value.fixRate}
//         price={value.price}
//         star={value.star as number}
//       />
//     ))}
//   </div>
// </section>

//     </>
//   );
// };

// export default Products;



// import Card from "../ui/card";
// import { PopularProduct } from "../utils/data";

// const Products = () => {
//   return (
//     <>
//       <section className="max-w-[82.5rem] mx-auto mt-[3.75rem] px-4">
//         <h1 className="text-[2.375rem] font-semibold mb-[2rem]">Popular Product</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 mx-[-1rem]">
//           {PopularProduct.slice(0, 10).map((value) => (
//             <Card
//               key={value.id}
//               id={value.id}
//               image={value.image}
//               title={value.title}
//               rate={value.rate}
//               fixRate={value.fixRate}
//               price={value.price}
//               star={value.star as number}
//             />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Products;


import { useNavigate } from "react-router-dom";
import Card from "../ui/card";
import { PopularProduct } from "../utils/data";

const Products = () => {
  const navigate = useNavigate(); // ✅ Import hook

  return (
    <>
      <section className="max-w-[82.5rem] mx-auto mt-[3.75rem] px-4">
        <h1 className="text-[2.375rem] font-semibold mb-[2rem]">Popular Product</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 mx-[-1rem]">
          {PopularProduct.slice(0, 10).map((value) => (
            <Card
              key={value.id}
              id={value.id}
              image={value.image}
              title={value.title}
              rate={value.rate}
              fixRate={value.fixRate}
              price={value.price}
              star={value.star as number}
              onNavigate={() => navigate(`/product/${value.id}`)} // ✅ Fix here
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
