import { useState, useMemo } from "react";
import CartProduct from "./CartProduct";
import CartTotalDisplay from "./CartTotalDisplay";
import CouponCode from "./CouponCode";
import { initialCart } from "../utils/data";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const [coupon, setCoupon] = useState("");

  const couponDiscount = coupon === "SAVE10" ? 10 : 0;
  const shippingCost = 0;

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const total = subtotal - couponDiscount + shippingCost;

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleProceedToCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <CartProduct
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
        <CouponCode coupon={coupon} setCoupon={setCoupon} />
      </div>

      <CartTotalDisplay
        subtotal={subtotal}
        shippingCost={shippingCost}
        couponDiscount={couponDiscount}
        total={total}
        onProceedToCheckout={handleProceedToCheckout}
      />
    </div>
  );
};

export default ShoppingCart;