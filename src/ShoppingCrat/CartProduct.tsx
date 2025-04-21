import React from "react";
import { CartItem } from "../../types/types";

interface CartProductProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
}

const CartProduct: React.FC<CartProductProps> = ({ cartItems, updateQuantity, removeItem }) => {
  return (
    <section>
      <h1 className="text-2xl font-bold text-right mb-4">My Shopping Cart</h1>

    <form className="h-[371px] p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div>
        <div className="grid grid-cols-4 text-sm text-gray-500 font-medium border-b w-full p-4">
          <span>PRODUCT</span>
          <span className="text-center">PRICE</span>
          <span className="text-center">QUANTITY</span>
          <span className="text-right mr-[2rem]">SUBTOTAL</span>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 items-center border-b px-4 py-4 relative"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
              <p className="text-[#1A1A1A]">{item.name}</p>
            </div>
            <p className="text-center">${item.price.toFixed(2)}</p>
            <div className="flex justify-center items-center gap-2 border rounded-full h-12 w-32">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="bg-gray-200 px-2 rounded-full"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="bg-gray-200 px-2 rounded-full"
              >
                +
              </button>
            </div>
            <p className="text-right font-semibold text-gray-900 pr-10">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => removeItem(item.id)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 hover:text-red-500 h-6 w-6 border rounded-full flex items-center justify-center text-xs"
            >
              ×
            </button>
          </div>
        ))}
      </div>
       {/* Bottom Controls */}
       <div className="flex justify-between m-6">
            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
              Return to shop
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
              Update Cart
            </button>
          </div>
    </form>
    </section>
  );
};

export default CartProduct;