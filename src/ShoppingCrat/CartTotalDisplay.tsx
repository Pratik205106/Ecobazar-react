import React from 'react';

interface CartTotalDisplayProps {
  subtotal: number;
  shippingCost: number;
  couponDiscount: number;
  total: number;
  onProceedToCheckout: () => void;
}

const CartTotalDisplay: React.FC<CartTotalDisplayProps> = ({
  subtotal,
  shippingCost,
  couponDiscount,
  total,
  onProceedToCheckout
}) => {
  return (
    <div className="w-[424px] h-[296px] my-[49px] bg-white rounded-lg shadow-md border border-gray-200 p-6 lg:sticky lg:top-6">
      <h2 className="text-xl font-semibold mb-4  border-gray-200 pb-3 text-gray-800">
        Cart Total
      </h2>

      <div className="space-y-3 mb-5">
        <div className="flex justify-between items-center text-sm text-gray-600 border-b border-gray-100 pb-3">
          <span>Subtotal:</span>
          <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
        </div>

        {couponDiscount > 0 && (
          <div className="flex justify-between items-center text-sm text-green-600 border-b border-gray-100 pb-3">
            <span>Coupon Discount:</span>
            <span className="font-medium">-${couponDiscount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between items-center text-sm text-gray-600 border-b border-gray-100 pb-3">
          <span>Shipping:</span>
          <span className="font-medium text-gray-800">
            {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between items-center font-bold text-lg pt-2 text-gray-900">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={onProceedToCheckout}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition duration-200 text-center text-base"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotalDisplay;