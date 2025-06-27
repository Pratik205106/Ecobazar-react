import { useCartUIStore } from "../store/cartUIStore";
import { useCartStore } from "../store/useCartStore";
import { CartItem } from "../../types/types";
import CartProduct from "../ShopComponents/CartProduct";
import { IoClose } from "react-icons/io5";

const CartDrawer = () => {
  const isOpen = useCartUIStore((state) => state.isOpen);
  const closeCart = useCartUIStore((state) => state.closeCart);
  const items = useCartStore((state) => state.items);

  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden mt-6 p-4 relative bg-white rounded-md shadow-lg ${
        isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      }`}
      style={{ width: "100%" }}
    >
      {/* Close Icon */}
      <button
        onClick={closeCart}
        aria-label="Close"
        className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
      >
        <IoClose size={24} />
      </button>

      {/* Heading */}
      <h2 className="text-lg font-semibold mb-4">Sale Products</h2>

      {/* Cart Items */}
      <div className="max-h-[400px] overflow-y-auto space-y-3 pt-2">
        {items.length > 0 ? (
          items.map((item: CartItem) => (
            <CartProduct key={item.id} product={item} />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No items in the cart.</p>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;

