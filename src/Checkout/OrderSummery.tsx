import { CartItem } from "../../types/types";
import { useCartStore } from "../store/useCartStore";

interface OrderSummaryProps {
  onPlaceOrder: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

const OrderSummary = ({ onPlaceOrder }: OrderSummaryProps) => {
  const { items, totalPrice } = useCartStore();

  // force totalPrice as number if needed
  const totalPriceNum: number = Number(totalPrice);
  const discount: number = 0;
  const shipping: number = 0;
  const total: number = totalPriceNum - discount + shipping;

  return (
    <main>
      <h2 className="text-xl font-semibold mb-5">Order Summary</h2>

      <div className="text-sm text-gray-700 mb-4">
        {items.map((product: CartItem) => {
          const productName: string = product.name || product.title || "Unnamed Product";

          // explicitly typed as number
          const totalItemPrice: number = product.price * product.quantity;

          return (
            <div
              key={product.id}
              className="flex items-center justify-between gap-4 mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={productName}
                  className="w-14 h-14 object-cover rounded-md"
                />
                <span className="font-semibold text-[#1A1A1A]">
                  {productName} × {product.quantity}
                </span>
              </div>
              <span className="text-sm text-[#1A1A1A] font-medium">
                ${totalItemPrice.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span className="font-medium text-gray-900">
            ${totalPriceNum.toFixed(2)}
          </span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between">
            <span>Discount:</span>
            <span className="font-medium text-red-500">
              - ${discount.toFixed(2)}
            </span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span className="font-medium text-gray-900">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
      </div>

      <div className="border-t border-gray-200 my-4" />
      <div className="flex justify-between font-bold text-base mb-6">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button
        type="button"
        onClick={onPlaceOrder}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out text-base"
      >
        Place Order
      </button>
    </main>
  );
};

export default OrderSummary;
