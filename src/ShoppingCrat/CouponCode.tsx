import React from "react";
import { toast } from "react-toastify"; // Optional: Only if using toast

type CouponCodeProps = {
  coupon: string;
  setCoupon: (value: string) => void;
};

const validCoupons: { [code: string]: number } = {
  SAVE10: 10,
  SUMMER15: 15,
};

const CouponCode: React.FC<CouponCodeProps> = ({ coupon, setCoupon }) => {
  const handleApplyCoupon = () => {
    const trimmed = coupon.trim().toUpperCase();

    if (trimmed === "") {
      toast?.error?.("Please enter a coupon code");
      return;
    }

    if (validCoupons[trimmed]) {
      setCoupon(trimmed);
      toast?.success?.(`Coupon "${trimmed}" applied!`);
    } else {
      toast?.error?.(`"${trimmed}" is not a valid coupon`);
    }
  };

  return (
    <div className="border border-gray-200 p-6 rounded-lg mt-6">
      <label htmlFor="coupon" className="block font-semibold mb-2 text-lg">
        Coupon Code
      </label>
      <div className="relative">
        <input
          type="text"
          id="coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter code"
          className="border border-gray-300 rounded-full py-2 px-8 w-full pr-40"
        />
        <button
          type="button"
          onClick={handleApplyCoupon}
          className="absolute right-0 top-0 bottom-0 transform bg-black text-white px-6 py-2 rounded-full text-sm font-semibold"
        >
          Apply Coupon
        </button>
      </div>
    </div>
  );
};

export default CouponCode;
