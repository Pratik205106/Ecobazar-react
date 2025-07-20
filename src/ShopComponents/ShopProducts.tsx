import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../types/types";
import Card from "../ui/card";
import { PopularProduct } from "../utils/data";
import ProductModal from "../ShopComponents/ProductModal";

interface ShopProductsProps {
  products?: ProductType[];
  gridColsClass?: string;
}

const ShopProducts = ({
  products,
  gridColsClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
}: ShopProductsProps) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const fallbackProducts: ProductType[] = [
    PopularProduct[5],
    PopularProduct[2],
    PopularProduct[6],
    PopularProduct[4],
    PopularProduct[7],
    PopularProduct[0],
    PopularProduct[8],
    PopularProduct[9],
    PopularProduct[11],
    PopularProduct[3],
    PopularProduct[12],
    PopularProduct[15],
    PopularProduct[10],
    PopularProduct[13],
    PopularProduct[14],
  ];

  const finalProducts = useMemo(() => products ?? fallbackProducts, [products]);

  const getBadge = (index: number): string | undefined => {
    if (index === 2) return "Out of stock";
    if (index === 8) return "50% OFF";
    return undefined;
  };

  const getFixRate = (index: number, product: ProductType): string | undefined =>
    index === 10 ? product.fixRate : undefined;

  const handleQuickView = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleNavigateToDetails = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section>
      <main className="h-auto my-8">
        <div className={`grid ${gridColsClass} gap-6`}>
          {finalProducts.map((product, index) => (
            <Card
              key={`${product.id}-${index}`}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rate={product.rate}
              star={
                typeof product.star === "string"
                  ? parseFloat(product.star)
                  : product.star
              }
              badge={getBadge(index)}
              fixRate={getFixRate(index, product)}
              onView={() => handleQuickView(product)}
              onNavigate={() => handleNavigateToDetails(product.id)}
            />
          ))}
        </div>

        {isModalOpen && selectedProduct && (
          <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        )}
      </main>
    </section>
  );
};

export default ShopProducts;


// import { useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { ProductType } from "../../types/types";
// import Card from "../ui/card";
// import { PopularProduct } from "../utils/data";
// import ProductModal from "../ShopComponents/ProductModal";

// interface ShopProductsProps {
//   products?: ProductType[];
// }

// const ShopProducts = ({ products }: ShopProductsProps) => {
//   const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate();

//   const fallbackProducts: ProductType[] = [
//     PopularProduct[5],
//     PopularProduct[2],
//     PopularProduct[6],
//     PopularProduct[4],
//     PopularProduct[7],
//     PopularProduct[0],
//     PopularProduct[8],
//     PopularProduct[9],
//     PopularProduct[11],
//     PopularProduct[3],
//     PopularProduct[12],
//     PopularProduct[15],
//     PopularProduct[10],
//     PopularProduct[13],
//     PopularProduct[14],
//   ];

//   const finalProducts = useMemo(() => products ?? fallbackProducts, [products]);

//   const getBadge = (index: number): string | undefined => {
//     if (index === 2) return "Out of stock";
//     if (index === 8) return "50% OFF";
//     return undefined;
//   };

//   const getFixRate = (index: number, product: ProductType): string | undefined =>
//     index === 10 ? product.fixRate : undefined;

//   const handleQuickView = (product: ProductType) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//     setIsModalOpen(false);
//   };

//   const handleNavigateToDetails = (productId: number) => {
//     navigate(`/product/${productId}`);
//   };

//   return (
//     <section>
//       <main className="h-auto my-8 ">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {finalProducts.map((product, index) => (
//             <Card
//               key={`${product.id}-${index}`}
//               id={product.id}
//               title={product.title}
//               price={product.price}
//               image={product.image}
//               rate={product.rate}
//               star={
//                 typeof product.star === "string"
//                   ? parseFloat(product.star)
//                   : product.star
//               }
//               badge={getBadge(index)}
//               fixRate={getFixRate(index, product)}
//               onView={() => handleQuickView(product)}
//               onNavigate={() => handleNavigateToDetails(product.id)}
//             />
//           ))}
//         </div>

//         {isModalOpen && selectedProduct && (
//           <ProductModal product={selectedProduct} onClose={handleCloseModal} />
//         )}
//       </main>
//     </section>
//   );
// };

// export default ShopProducts;
