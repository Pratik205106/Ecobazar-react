import React from "react";
import { CartItem } from "../../types/types";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

type CartProductProps = {
  product: CartItem;
};

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const { image, name, price, star = 0 } = product;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex items-center gap-1 mt-1">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-[#FF8A00] text-sm" />
        ))}
        {[...Array(halfStars)].map((_, index) => (
          <FaStarHalfAlt key={`half-${index}`} className="text-[#FF8A00] text-sm" />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-[#FF8A00] text-sm" />
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center gap-4 border p-3 rounded-md shadow-sm hover:shadow-[0_0_8px_1px_#00B207] transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-[70px] h-[70px] object-cover rounded-md"
      />

      <div className="flex flex-col justify-between">
        <p className="text-[#1A1A1A] font-semibold hover:text-[#2C742F] transition">
          {name}
        </p>
        <p className="text-[#1A1A1A] font-medium">${price.toFixed(2)}</p>
        {renderStars(star)}
      </div>
    </div>
  );
};

export default CartProduct;
