// import { useState, useRef } from "react";
// import { IoClose } from "react-icons/io5";
// import {
//   FaStar,
//   FaStarHalfAlt,
//   FaRegStar,
//   FaRegHeart,
//   FaChevronUp,
//   FaChevronDown,
// } from "react-icons/fa";
// import { ProductType } from "../../types/types";
// import { BsHandbag } from "react-icons/bs";
// import SocialIcons from "./SocialIcons";
// import QuantitySelector from "./QuantitySelector";

// interface ProductModalProps {
//   product: ProductType;
//   onClose?: () => void;
//   isEmbedded?: boolean; // NEW PROP
// }

// const ProductModal = ({ product, onClose, isEmbedded = false }: ProductModalProps) => {
//   const [quantity, setQuantity] = useState(1);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const thumbnailRef = useRef<HTMLDivElement>(null);

//   const imageList = product.images ?? [product.image];
//   const rating =
//     typeof product.star === "string"
//       ? parseFloat(product.star)
//       : product.star ?? 0;
//   const discountPercent = product.fixRate
//     ? Math.round(
//         ((parseFloat(product.fixRate.replace("$", "")) - product.price) /
//           parseFloat(product.fixRate.replace("$", ""))) *
//           100
//       )
//     : null;

//   const renderStars = (rating: number) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex items-center gap-1">
//         {[...Array(fullStars)].map((_, i) => (
//           <FaStar key={i} className="text-[#FF8A00]" />
//         ))}
//         {halfStar && <FaStarHalfAlt className="text-[#FF8A00]" />}
//         {[...Array(emptyStars)].map((_, i) => (
//           <FaRegStar key={i} className="text-[#FF8A00]" />
//         ))}
//       </div>
//     );
//   };

//   const handleAddToCart = () => {
//     console.log(`Added ${quantity} of ${product.name}`);
//   };

//   const scrollThumbnails = (direction: "up" | "down") => {
//     thumbnailRef.current?.scrollBy({
//       top: direction === "up" ? -80 : 80,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div
//       className={
//         isEmbedded
//           ? "w-full bg-white p-6 rounded-md"
//           : "fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
//       }
//     >
//       <div
//         className={
//           isEmbedded
//             ? "w-full max-w-[1320px] flex flex-col md:flex-row gap-8"
//             : "bg-white rounded-md p-6 w-full max-w-[1320px] h-[636px] relative flex flex-col md:flex-row gap-8 overflow-y-auto"
//         }
//       >
//         {!isEmbedded && onClose && (
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-2xl text-gray-700"
//           >
//             <IoClose />
//           </button>
//         )}

//         {/* Image Section */}
//         <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
//           <div className="flex flex-col items-center gap-2">
//             <button
//               onClick={() => scrollThumbnails("up")}
//               className="text-[#999999] hover:text-black"
//             >
//               <FaChevronUp />
//             </button>
//             <div
//               ref={thumbnailRef}
//               className="flex flex-col gap-2 overflow-y-auto max-h-[300px] pr-1 custom-scrollbar"
//             >
//               {imageList.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={`thumb-${index}`}
//                   onClick={() => setSelectedIndex(index)}
//                   className={`w-[65px] h-[65px] object-cover cursor-pointer border p-1 rounded-md ${
//                     selectedIndex === index
//                       ? "border-green-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//             <button
//               onClick={() => scrollThumbnails("down")}
//               className="text-[#999999] hover:text-black"
//             >
//               <FaChevronDown />
//             </button>
//           </div>
//           <div className="flex-1">
//             <img
//               src={imageList[selectedIndex]}
//               alt={`product-${selectedIndex}`}
//               className="w-full rounded-md object-contain"
//             />
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="h-[501px] w-[568px] md:w-1/2 space-y-3">
//           <div className="h-[152px] w-full">
//             <div className="flex items-center space-x-4">
//               <h2 className="text-[36px] font-semibold text-[#1A1A1A]">
//                 {product.name}
//               </h2>
//               <span className="flex items-center text-[14px] bg-[#20B52633] text-[#2C742F] h-[29px] w-[71px] rounded">
//                 <h1 className="mx-auto">In Stock</h1>
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-sm mt-3">
//               {renderStars(rating)}
//               <span className="text-[#666666] text-[14px]">
//                 {product.reviewCount ?? "4"} Review
//               </span>
//               <hr className="bg-[#B3B3B3] border-4 rounded-full" />
//               <div className="flex items-center gap-4 text-sm">
//                 <span className="text-[#333333] font-medium">
//                   SKU:{" "}
//                   <span className="text-[#666666]">
//                     {product.sku ?? "000-000"}
//                   </span>
//                 </span>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 mt-5">
//               {product.fixRate && (
//                 <span className="line-through text-gray-400 text-lg">
//                   {product.fixRate}
//                 </span>
//               )}
//               <span className="text-[#2C742F] text-[24px] font-medium">
//                 ${product.price.toFixed(2)}
//               </span>
//               {discountPercent && (
//                 <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
//                   {discountPercent}% Off
//                 </span>
//               )}
//             </div>
//             <hr className="border-[#E6E6E6] h-[2px] w-[568px] mt-[20px]" />
//           </div>

//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div className="flex items-center gap-48 mt-6">
//               <div className="flex items-center gap-2">
//                 <span className="font-semibold text-[14px] text-[#1A1A1A]">
//                   Brand:
//                 </span>
//                 <div className="flex flex-col items-center gap-1 h-[56px] w-[56px] border border-[#E6E6E6] rounded-md p-1">
//                   <img
//                     src={product.brandLogo ?? "/brand-logo.png"}
//                     alt="brand logo"
//                     className="w-[32px] h-8 object-contain"
//                   />
//                   <img
//                     src={product.BrandName ?? "/brand-name.png"}
//                     alt="brand name"
//                     className="w-[40px] h-12 object-contain"
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 text-sm">
//                 <span className="font-semibold text-[#1A1A1A]">Share item:</span>
//                 <SocialIcons />
//               </div>
//             </div>
//           </div>

//           <p className="text-[#808080] text-sm max-w-[540px]">
//             {product.description ?? ""}
//             <hr className="border-[#E6E6E6] h-[2px] w-[568px] mt-6" />
//           </p>

//           <div className="flex items-center gap-4">
//             <div className="h-[88px] flex items-center">
//               <QuantitySelector
//                 quantity={quantity}
//                 onIncrease={() => setQuantity((prev) => prev + 1)}
//                 onDecrease={() => setQuantity((prev) => Math.max(1, prev - 1))}
//               />
//             </div>
//             <button
//               className="bg-[#00B207] hover:bg-green-700 text-white px-6 py-3 h-[51px] w-[368px] rounded-3xl flex items-center gap-2"
//               onClick={handleAddToCart}
//             >
//               <div className="flex items-center gap-4 mx-auto">
//                 Add to Cart <BsHandbag />
//               </div>
//             </button>

//             <button className="w-12 h-12 bg-[#20B5261A] rounded-full text-green-600 hover:bg-green-100 flex items-center justify-center">
//               <FaRegHeart />
//             </button>
//           </div>

//           <hr className="border-[#E6E6E6] h-[2px] w-[568px] mt-6" />

//           <p className="text-sm">
//             <span className="font-semibold text-[#1A1A1A]">Category:</span>{" "}
//             <span className="text-[#808080]">
//               {product.category ?? "Uncategorized"}
//             </span>
//           </p>
//           <p className="text-sm">
//             <span className="font-semibold text-[#1A1A1A]">Tags:</span>{" "}
//             <span className="text-[#808080]">
//               {product.tags?.join(", ") ?? `Healthy, ${product.name}`}
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;




import { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaRegHeart,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { ProductType } from "../../types/types";
import { BsHandbag } from "react-icons/bs";
import SocialIcons from "./SocialIcons";
import QuantitySelector from "./QuantitySelector";

interface ProductModalProps {
  product: ProductType;
  onClose?: () => void;
  isEmbedded?: boolean;
}

const ProductModal = ({ product, onClose, isEmbedded = false }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const imageList = product.images ?? [product.image];
  const rating =
    typeof product.star === "string" ? parseFloat(product.star) : product.star ?? 0;

  const discountPercent = product.fixRate
    ? Math.round(
        ((parseFloat(product.fixRate.replace("$", "")) - product.price) /
          parseFloat(product.fixRate.replace("$", ""))) * 100
      )
    : null;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-[#FF8A00]" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-[#FF8A00]" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} className="text-[#FF8A00]" />
        ))}
      </div>
    );
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name}`);
  };

  const scrollThumbnails = (direction: "up" | "down") => {
    thumbnailRef.current?.scrollBy({
      top: direction === "up" ? -80 : 80,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={
        isEmbedded
          ? "w-full bg-white rounded-md"
          : "fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
      }
    >
      <div
        className={
          isEmbedded
            ? "w-full max-w-[1320px] flex flex-col md:flex-row gap-8"
            : "bg-white rounded-md p-4 sm:p-6 w-full max-w-[1320px] max-h-[95vh] relative flex flex-col md:flex-row gap-8 overflow-y-auto"
        }
      >
        {!isEmbedded && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-gray-700"
          >
            <IoClose />
          </button>
        )}

        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
          <div className="flex flex-col items-center gap-2">
            <button onClick={() => scrollThumbnails("up")} className="text-[#999999] hover:text-black">
              <FaChevronUp />
            </button>
            <div
              ref={thumbnailRef}
              className="flex flex-col gap-2 overflow-y-auto max-h-[300px] pr-1 custom-scrollbar"
            >
              {imageList.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-[65px] h-[65px] object-cover cursor-pointer border p-1 rounded-md ${
                    selectedIndex === index ? "border-green-500" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
            <button onClick={() => scrollThumbnails("down")} className="text-[#999999] hover:text-black">
              <FaChevronDown />
            </button>
          </div>
          <div className="flex-1">
            <img
              src={imageList[selectedIndex]}
              alt={`product-${selectedIndex}`}
              className="w-full rounded-md object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-3">
          <div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1A1A1A]">
                {product.name}
              </h2>
              <span className="flex items-center text-[14px] bg-[#20B52633] text-[#2C742F] h-[29px] w-[71px] rounded justify-center">
                In Stock
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm mt-3">
              {renderStars(rating)}
              <span className="text-[#666666] text-[14px]">
                {product.reviewCount ?? "4"} Review
              </span>
              <span className="text-[#333333] font-medium">
                SKU: <span className="text-[#666666]">{product.sku ?? "000-000"}</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-5">
              {product.fixRate && (
                <span className="line-through text-gray-400 text-lg">{product.fixRate}</span>
              )}
              <span className="text-[#2C742F] text-[24px] font-medium">
                ${product.price.toFixed(2)}
              </span>
              {discountPercent && (
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                  {discountPercent}% Off
                </span>
              )}
            </div>

            <hr className="border-[#E6E6E6] h-[2px] w-full mt-[20px]" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[14px] text-[#1A1A1A]">Brand:</span>
              <div className="flex flex-col items-center gap-1 h-[56px] w-[56px] border border-[#E6E6E6] rounded-md p-1">
                <img
                  src={product.brandLogo ?? "/brand-logo.png"}
                  alt="brand logo"
                  className="w-[32px] h-8 object-contain"
                />
                <img
                  src={product.BrandName ?? "/brand-name.png"}
                  alt="brand name"
                  className="w-[40px] h-12 object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="font-semibold text-[#1A1A1A]">Share item:</span>
              <SocialIcons />
            </div>
          </div>

          <p className="text-[#808080] text-sm max-w-full sm:max-w-[540px]">{product.description}</p>
          <hr className="border-[#E6E6E6] h-[2px] w-full mt-6" />

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity((prev) => prev + 1)}
              onDecrease={() => setQuantity((prev) => Math.max(1, prev - 1))}
            />

            <button
              className="bg-[#00B207] hover:bg-green-700 text-white px-6 py-3 h-[51px] w-full sm:w-[368px] rounded-3xl flex items-center justify-center gap-2"
              onClick={handleAddToCart}
            >
              Add to Cart <BsHandbag />
            </button>

            <button className="w-12 h-12 bg-[#20B5261A] rounded-full text-green-600 hover:bg-green-100 flex items-center justify-center">
              <FaRegHeart />
            </button>
          </div>

          <hr className="border-[#E6E6E6] h-[2px] w-full mt-6" />

          <p className="text-sm">
            <span className="font-semibold text-[#1A1A1A]">Category:</span>{" "}
            <span className="text-[#808080]">{product.category ?? "Uncategorized"}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold text-[#1A1A1A]">Tags:</span>{" "}
            <span className="text-[#808080]">
              {product.tags?.join(", ") ?? `Healthy, ${product.name}`}
            </span>
          </p>
        </div>
      </div>  
    </div>
  );
};

export default ProductModal;