import { useLocation, useNavigate } from 'react-router';
import { ProductType, BillingInfo } from '../../types/types';
import { useCartStore } from '../store/useCartStore';

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCartStore();

  const billingInfo: BillingInfo = location.state?.billingInfo;
  const products: ProductType[] = location.state?.products || [];
  const subtotal: number = location.state?.subtotal ?? 0;
  const discount: number = location.state?.discount ?? 0;
  const shipping: number = location.state?.shipping ?? 0;
  const total: number = location.state?.total ?? subtotal - discount + shipping;

  const handlePlaceOrder = () => {
    const cleanedProducts = products.map((product) => ({
      title: product.title,
      quantity: product.quantity ?? 1,
      price: product.price,
    }));

    const orderSummary = {
      billingInfo,
      products: cleanedProducts,
      placedAt: new Date().toISOString(),
      total,
    };

    localStorage.setItem('lastOrder', JSON.stringify(orderSummary));
    console.log('Saved order to localStorage:', orderSummary);

    clearCart();
    localStorage.removeItem('cartItems');

    alert('Your order has been placed successfully!');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto font-sans mt-10">
        <h2 className="text-xl font-semibold mb-5">Order Summary</h2>

        {billingInfo && (
          <div className="mb-4 text-sm text-gray-700 space-y-1">
            <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
            <p><strong>Name:</strong> {billingInfo.firstName} {billingInfo.lastName}</p>
            {billingInfo.companyName && <p><strong>Company:</strong> {billingInfo.companyName}</p>}
            <p><strong>Email:</strong> {billingInfo.email}</p>
            <p><strong>Phone:</strong> {billingInfo.phoneNumber}</p>
            <p><strong>Address:</strong> {billingInfo.streetAddress}, {billingInfo.state}, {billingInfo.country} - {billingInfo.zipCode}</p>
            {billingInfo.orderNotes && <p><strong>Order Notes:</strong> {billingInfo.orderNotes}</p>}
            {billingInfo.shipToDifferentAddress && (
              <p><strong>Shipping Address:</strong> Different from billing (not shown)</p>
            )}
          </div>
        )}

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
              {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
            </span>
          </div>
        </div>

        <div className="border-t border-gray-200 my-4" />

        <div className="flex justify-between font-bold text-base mb-6">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

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
            <span className="text-sm font-medium text-gray-800">Cash on Delivery</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="payment_method"
              value="paypal"
              className="form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
            />
            <span className="text-sm font-medium text-gray-700">PayPal</span>
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

        <div id="checkOutBox">
          <button
            type="button"
            onClick={handlePlaceOrder}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out text-base"
          >
            Place Order
          </button>
        </div>
      </div>
    </main>
  );
};

export default OrderSummary;
