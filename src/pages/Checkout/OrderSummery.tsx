import { ProductType } from "../../../types/types";

interface Props {
  products: ProductType[];
}

const OrderSummery = ({ products }: Props) => {
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto font-sans">
        <h2 className="text-xl font-semibold mb-5">Order Summary</h2>

        {/* Product List */}
        <div className="space-y-4 mb-4">
          {products.map((product, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <span className="text-sm text-gray-700">
                  {product.title} x{product.quantity || 1}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                ${product.price}
              </span>
            </div>
          ))}
        </div>

        {/* Order Totals */}
        <div className="border-t border-gray-200 pt-4 space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal:</span>
            <span className="font-medium text-gray-900">
              $
              {products.reduce(
                (acc, product) =>
                  acc + product.price * (product.quantity || 1),
                0
              )}
            </span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Shipping:</span>
            <span className="font-medium text-gray-900">Free</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Total */}
        <div className="flex justify-between font-bold text-base mb-6">
          <span>Total:</span>
          <span>
            $
            {products.reduce(
              (acc, product) => acc + product.price * (product.quantity || 1),
              0
            )}
          </span>
        </div>

        {/* Payment Method */}
        <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
        <div className="space-y-3 mb-6">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="payment_method"
              value="cod"
              className="form-radio h-4 w-4 text-green-600 border-green-400 focus:ring-green-500"
              defaultChecked
            />
            <span className="text-sm font-medium text-gray-800">
              Cash on Delivery
            </span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="payment_method"
              value="paypal"
              className="form-radio h-4 w-4"
            />
            <span className="text-sm font-medium text-gray-700">Paypal</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="payment_method"
              value="amazon_pay"
              className="form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
            />
            <span className="text-sm font-medium text-gray-700">Amazon Pay</span>
          </label>
        </div>

        {/* Place Order Button */}
        <button
          type="button"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out text-base"
        >
          Place Order
        </button>
      </div>
    </main>
  );
};

export default OrderSummery;
