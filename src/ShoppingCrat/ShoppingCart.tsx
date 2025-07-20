import CartProduct from "./CartProduct";
import CartTotalDisplay from "./CartTotalDisplay";
import CouponCode from "./CouponCode";
import { useState } from "react";
import { useCartStore } from "../store/useCartStore";
import { useNavigate } from "react-router"; 

const ShoppingCart = () => {
  const {
    items: cartItems,
    updateQuantity,
    removeItem,
  } = useCartStore();

  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate(); //  Navigation hook

  //  Totals calculation
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const couponDiscount = coupon === "SAVE10" ? 10 : 0;
  const shippingCost = 0;
  const total = subtotal - couponDiscount + shippingCost;

  const handleProceedToCheckout = () => {
    navigate("/checkout", {
      state: {
        products: cartItems,
        subtotal,
        discount: couponDiscount,
        shipping: shippingCost,
        total,
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section - Products & Coupon */}
      <div className="lg:col-span-2">
        <CartProduct
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
        <CouponCode coupon={coupon} setCoupon={setCoupon} />
      </div>

      {/* Right Section - Cart Summary */}
      <div id="cart-total-display">
        <CartTotalDisplay
          subtotal={subtotal}
          shippingCost={shippingCost}
          couponDiscount={couponDiscount}
          total={total}
          cartItems={cartItems}
          onProceedToCheckout={handleProceedToCheckout}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;

