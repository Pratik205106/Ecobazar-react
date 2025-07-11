import { ProductType, BillingInfo } from "../../types/types";
import { useCartStore } from "../store/useCartStore";
import { useLocation, useNavigate } from "react-router-dom";

//  Step 1: Define props interface
interface OrderSummaryProps {
  onPlaceOrder: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

const OrderSummary = ({ onPlaceOrder }: OrderSummaryProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCartStore();

  const billingInfo: BillingInfo = location.state?.billingInfo;
  const products: ProductType[] = location.state?.products || [];
  const subtotal: number = location.state?.subtotal ?? 0;
  const discount: number = location.state?.discount ?? 0;
  const shipping: number = location.state?.shipping ?? 0;
  const total: number = location.state?.total ?? subtotal - discount + shipping;

  return (
    <main>
      <h2 className="text-xl font-semibold mb-5">Order Summary</h2>

      <div className="text-sm text-gray-700 mb-4">
        {products.map((product, index) => {
          const quantity = product.quantity ?? 1;
          const totalPrice = quantity * product.price;
          const productName = product.name || product.title || "Unnamed Product";

          return (
            <div key={index} className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={productName}
                  className="w-14 h-14 object-cover rounded-md"
                />
                <span className="font-semibold text-[#1A1A1A]">
                  {productName} × {quantity}
                </span>
              </div>
              <span className="text-sm text-[#1A1A1A] font-medium">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between">
            <span>Discount:</span>
            <span className="font-medium text-red-500">- ${discount.toFixed(2)}</span>
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

      {/* Hook up submit button */}
      <div id="checkOutBox">
        <button
          type="button"
          onClick={onPlaceOrder}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out text-base"
        >
          Place Order
        </button>
      </div>
    </main>
  );
};

export default OrderSummary;
