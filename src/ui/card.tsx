// import { BsHandbag } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
// import { RiEyeLine } from "react-icons/ri";
// import Stars from "../ui/Stars"; //  import your reusable Stars component
// import { useCartStore } from "../store/useCartStore"; 
// import { useCartUIStore } from "../store/cartUIStore";

// interface Props {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
//   star?: number;
//   rate: string;
//   fixRate?: string;
//   badge?: string;
//   onView?: () => void;
// }

// const Card = ({
//   id,
//   image,
//   title,
//   price,
//   rate,
//   star,
//   badge,
//   fixRate,
//   onView,
// }: Props) => {
//   const newStar = typeof star === "number" ? star : 0;
//   const addToCart = useCartStore((state) => state.addToCart);
//   const openCart = useCartUIStore((state) => state.openCart);

//   const handleAddToCart = () => {
//     if (badge === "Out of stock") return;

//     addToCart({
//       id,
//       image,
//       name: title,
//       price,
//       star: newStar,
//     });
//     openCart();
//   };

//   return (
//     <div className="border group p-4 shadow-md relative transition-all hover:shadow-[#00B207]">
//       {badge && (
//         <span
//           className={`absolute top-2 left-2 z-10 px-2 py-1 text-xs font-bold rounded 
//             ${badge === "Out of stock" ? "bg-[#1A1A1A]" : "bg-[#EA4B48]"} text-white`}
//         >
//           {badge}
//         </span>
//       )}

//       <div>
//         <img
//           src={image}
//           height={327}
//           width={264}
//           className="object-cover rounded-lg"
//           alt={title}
//         />
//       </div>

//       <div className="hidden group-hover:flex absolute top-2 right-2 flex-col gap-2">
//         <button
//           className="h-10 w-10 bg-[#F2F2F2] rounded-full flex justify-center items-center"
//           onClick={() => console.log(`Liked product with id: ${id}`)}
//         >
//           <CiHeart />
//         </button>
//       </div>

//       <div className="hidden group-hover:block absolute top-16 right-2">
//         <button
//           className="h-10 w-10 bg-[#F2F2F2] rounded-full flex justify-center items-center"
//           onClick={onView}
//           aria-label="Quick view"
//         >
//           <RiEyeLine />
//         </button>
//       </div>

//       <div className="mt-2 text-lg ml-3">
//         <p className="text-[#4D4D4D] hover:text-[#2C742F] font-medium">{title}</p>

//         <div className="flex items-center gap-2">
//           <p className="text-[1rem] text-[#1A1A1A]">{rate}</p>
//           {fixRate && (
//             <p className="text-[0.875rem] text-[#888] line-through">{fixRate}</p>
//           )}
//         </div>

//         <div className="absolute bottom-4 right-4">
//           <button
//             className={`h-10 w-10 rounded-full flex justify-center items-center transition 
//               ${
//                 badge === "Out of stock"
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-[#F2F2F2] text-[#1A1A1A] hover:bg-[#00B207] hover:text-white"
//               }`}
//             onClick={handleAddToCart}
//             aria-label="Add to cart"
//             disabled={badge === "Out of stock"}
//           >
//             <BsHandbag />
//           </button>
//         </div>

//         <Stars rating={newStar} className="mt-1 ml-[0.1rem]" />
//       </div>
//     </div>
//   );
// };

// export default Card;




import { BsHandbag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { RiEyeLine } from "react-icons/ri";
import Stars from "../ui/Stars";
import { useCartStore } from "../store/useCartStore"; 
import { useCartUIStore } from "../store/cartUIStore";

interface Props {
  id: number;
  image: string;
  title: string;
  price: number;
  star?: number;
  rate: string;
  fixRate?: string;
  badge?: string;
  onView?: () => void;
  onNavigate: () => void;
}

const Card = ({
  id,
  image,
  title,
  price,
  rate,
  star,
  badge,
  fixRate,
  onView,
  onNavigate,
}: Props) => {
  const newStar = typeof star === "number" ? star : 0;
  const addToCart = useCartStore((state) => state.addToCart);
  const openCart = useCartUIStore((state) => state.openCart);

  const handleAddToCart = () => {
    if (badge === "Out of stock") return;

    addToCart({
      id,
      image,
      name: title,
      price,
      star: newStar,
    });
    openCart();
  };

  return (
    <div className="border group p-4 shadow-md relative transition-all hover:shadow-[#00B207] rounded-lg">
      {badge && (
        <span
          className={`absolute top-2 left-2 z-10 px-2 py-1 text-xs font-bold rounded 
            ${badge === "Out of stock" ? "bg-[#1A1A1A]" : "bg-[#EA4B48]"} text-white`}
        >
          {badge}
        </span>
      )}

      {/* Image clickable for navigation */}
      <div onClick={onNavigate} className="cursor-pointer">
        <img
          src={image}
          height={327}
          width={264}
          className="object-cover rounded-lg"
          alt={title}
        />
      </div>

      {/* Heart icon on hover */}
      <div className="hidden group-hover:flex absolute top-2 right-2 flex-col gap-2">
        <button
          className="h-10 w-10 bg-[#F2F2F2] rounded-full flex justify-center items-center"
          onClick={() => console.log(`Liked product with id: ${id}`)}
          aria-label="Like"
        >
          <CiHeart />
        </button>
      </div>

      {/* Eye (quick view) button */}
      <div className="hidden group-hover:block absolute top-16 right-2">
        <button
          className="h-10 w-10 bg-[#F2F2F2] rounded-full flex justify-center items-center"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering onNavigate
            onView && onView();
          }}
          aria-label="Quick view"
        >
          <RiEyeLine />
        </button>
      </div>

      {/* Title clickable for navigation */}
      <div className="mt-2 text-lg ml-3">
        <p
          className="text-[#4D4D4D] hover:text-[#2C742F] font-medium cursor-pointer"
          onClick={onNavigate}
        >
          {title}
        </p>

        <div className="flex items-center gap-2">
          <p className="text-[1rem] text-[#1A1A1A]">{rate}</p>
          {fixRate && (
            <p className="text-[0.875rem] text-[#888] line-through">{fixRate}</p>
          )}
        </div>

        <div className="absolute bottom-4 right-4">
          <button
            className={`h-10 w-10 rounded-full flex justify-center items-center transition 
              ${
                badge === "Out of stock"
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#F2F2F2] text-[#1A1A1A] hover:bg-[#00B207] hover:text-white"
              }`}
            onClick={handleAddToCart}
            aria-label="Add to cart"
            disabled={badge === "Out of stock"}
          >
            <BsHandbag />
          </button>
        </div>

        <Stars rating={newStar} className="mt-1 ml-[0.1rem]" />
      </div>
    </div>
  );
};

export default Card;
