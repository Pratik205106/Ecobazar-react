import React from "react";
import { CartItem } from "../../types/types";
import { NavLink } from "react-router";

interface CartProductProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
}

const CartProduct: React.FC<CartProductProps> = ({
  cartItems,
  updateQuantity,
  removeItem,
}) => {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      const safePrice = typeof item.price === "number" ? item.price : 0;
      const safeQuantity = typeof item.quantity === "number" ? item.quantity : 0;
      return acc + safePrice * safeQuantity;
    }, 0);
  };

  return (
    <section>
      <h1 className="text-2xl font-bold text-right mb-4">My Shopping Cart</h1>

      <form className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <div>
          <div className="grid grid-cols-4 text-sm text-gray-500 font-medium border-b w-full p-4">
            <span>PRODUCT</span>
            <span className="text-center">PRICE</span>
            <span className="text-center">QUANTITY</span>
            <span className="text-right mr-[2rem]">SUBTOTAL</span>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 p-6">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => {
              const safePrice = typeof item.price === "number" ? item.price : 0;
              const safeQuantity = typeof item.quantity === "number" ? item.quantity : 0;
              const subtotal = safePrice * safeQuantity;

              return (
                <div
                  key={item.id}
                  className="grid grid-cols-4 items-center border-b px-4 py-4 relative"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                    <p className="text-[#1A1A1A]">{item.name}</p>
                  </div>

                  <p className="text-center">${safePrice.toFixed(2)}</p>

                  <div className="flex justify-center items-center gap-2 border rounded-full h-12 w-32">
                    <button
                      type="button"
                      onClick={() => {
                        if (safeQuantity <= 1) {
                          removeItem(item.id);
                        } else {
                          updateQuantity(item.id, -1);
                        }
                      }}
                      className="bg-gray-200 px-2 rounded-full"
                    >
                      -
                    </button>
                    <span>{safeQuantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-gray-200 px-2 rounded-full"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-right font-semibold text-gray-900 pr-10">
                    ${subtotal.toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Remove this item from your cart?")) {
                        removeItem(item.id);
                      }
                    }}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 hover:text-red-500 h-6 w-6 border rounded-full flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Total and Controls */}
     {cartItems.length > 0 && (
  <div className="mt-6">
    <div className="flex justify-between">
      <NavLink to="/shop">
        <button
          type="button"
          className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
        >
          Return to shop
        </button>
      </NavLink>

      <NavLink to="/">
        <button
          type="button"
          className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
        >
          update cart
        </button>
      </NavLink>
    </div>
  </div>
)}



        
      </form>
    </section>
  );
};

export default CartProduct;
