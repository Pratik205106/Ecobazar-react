// // ShopProducts.tsx
// import { ProductType } from "../../types/types";
// import Card from "../ui/card";
// import { extraProducts, PopularProduct } from "../utils/data";

// const ShopProducts = () => {
//   const products = [
//     PopularProduct[5],
//     PopularProduct[2],
//     PopularProduct[6],
//     PopularProduct[4],
//     PopularProduct[7],
//     PopularProduct[0],
//     PopularProduct[8],
//     PopularProduct[9],
//     extraProducts[1],
//     PopularProduct[3],
//     extraProducts[2],
//     extraProducts[5],
//     extraProducts[0],
//     extraProducts[3],
//     extraProducts[4],
//   ];

//   const getFixRate = (index: number, product: ProductType): string | undefined => {
//     if (index === 12) {
//       return product.fixRate;
//     }
//     return undefined;
//   };

//   return (
//     <section>
//       <main className="h-auto my-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//          {products.map((product, index) => (
//   <Card
//     key={`${product.id}-${index}`}
//     id={product.id}
//     rate={product.rate}
//     title={product.title}
//     price={product.price}
//     image={product.image}
//     star={typeof product.star === "string" ? parseFloat(product.star) : product.star}
//     badge={index === 2 ? "Out of stock" : index === 8 ? "50% OFF" : undefined}
//     fixRate={getFixRate(index, product)}
//   />
// ))}

//         </div>
//       </main>
//     </section>
//   );
// };

// export default ShopProducts;

// import { useState } from "react";
// import { ProductType } from "../../types/types";
// import Card from "../ui/card";
// import { extraProducts, PopularProduct } from "../utils/data";
// import ProductModal from "../ShopComponents/ProductModal"; // ← Create this component

// const ShopProducts = () => {
//   const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const products = [
//     PopularProduct[5], PopularProduct[2], PopularProduct[6], PopularProduct[4],
//     PopularProduct[7], PopularProduct[0], PopularProduct[8], PopularProduct[9],
//     extraProducts[1], PopularProduct[3], extraProducts[2], extraProducts[5],
//     extraProducts[0], extraProducts[3], extraProducts[4],
//   ];

//   const getFixRate = (index: number, product: ProductType): string | undefined =>
//     index === 12 ? product.fixRate : undefined;

//   const handleViewProduct = (product: ProductType) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <section>
//       <main className="h-auto my-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.map((product, index) => (
//             <Card
//               key={`${product.id}-${index}`}
//               id={product.id}
//               rate={product.rate}
//               title={product.title}
//               price={product.price}
//               image={product.image}
//               star={typeof product.star === "string" ? parseFloat(product.star) : product.star}
//               badge={index === 2 ? "Out of stock" : index === 8 ? "50% OFF" : undefined}
//               fixRate={getFixRate(index, product)}
//               onView={() => handleViewProduct(product)} // 🔑 Pass handler
//             />
//           ))}
//         </div>
//         {isModalOpen && selectedProduct && (
//           <ProductModal product={selectedProduct} onClose={closeModal} />
//         )}
//       </main>
//     </section>
//   );
// };

// export default ShopProducts;


import { useState } from "react";
import { ProductType } from "../../types/types";
import Card from "../ui/card";
import { PopularProduct } from "../utils/data";
import ProductModal from "../ShopComponents/ProductModal";

const ShopProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    PopularProduct[5],  // Big Potatoes
    PopularProduct[2],  // Chinese cabbage
    PopularProduct[6],  // Corn
    PopularProduct[4],  // Eggplant
    PopularProduct[7],  // Cauliflower
    PopularProduct[0],  // Green Apple
    PopularProduct[8],  // Green Capsicum
    PopularProduct[9],  // Green Chili
    PopularProduct[11], // Green Cucumber
    PopularProduct[3],  // Green Lettuce
    PopularProduct[12], // Ladies Finger
    PopularProduct[15], // Green Capsicum(Red)
    PopularProduct[10], //Red Chili
    PopularProduct[13], // Red Tomato
    PopularProduct[14], // Fresh Mango
  ];

  const getFixRate = (index: number, product: ProductType): string | undefined =>
    index === 10 ? product.fixRate : undefined;

  const handleViewProduct = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <section>
      <main className="h-auto my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={`${product.id}-${index}`}
              id={product.id}
              rate={product.rate}
              title={product.title}
              price={product.price}
              image={product.image}
              star={
                typeof product.star === "string"
                  ? parseFloat(product.star)
                  : product.star
              }
              badge={
                index === 2
                  ? "Out of stock"
                  : index === 8
                  ? "50% OFF"
                  : undefined
              }
              fixRate={getFixRate(index, product)}
              onView={() => handleViewProduct(product)}
            />
          ))}
        </div>

        {isModalOpen && selectedProduct && (
          <ProductModal product={selectedProduct} onClose={closeModal} />
        )}
      </main>
    </section>
  );
};

export default ShopProducts;
