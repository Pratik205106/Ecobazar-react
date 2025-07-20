import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BillingSection from "../Checkout/BillingSection";
import ShippingSection from "../Checkout/ShippingForm";
import OrderSummary from "../Checkout/OrderSummery";
import { BillingInfo } from "../../types/types";
import { useCartStore } from "../store/useCartStore";

const Checkout = () => {
  const [showShipping, setShowShipping] = useState(false);
  const navigate = useNavigate();
  const { clearCart } = useCartStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BillingInfo>();

  const onSubmit = (data: BillingInfo) => {
    console.log("✅ Form submitted:", data);

    // Simulate backend or order processing
    alert("🎉 Order placed successfully!");

    // Clear cart & reset form
    clearCart();
    reset();

    // Navigate back to homepage
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-10"
      >
        {/* LEFT: Billing, Shipping, Notes */}
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-6">Billing Information</h3>
            <BillingSection register={register} errors={errors} />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="ship-different"
              checked={showShipping}
              onChange={() => setShowShipping(!showShipping)}
              className="w-4 h-4 text-green-600 border-gray-300 rounded"
            />
            <label htmlFor="ship-different" className="text-sm text-gray-700">
              Ship to a different address
            </label>
          </div>

          {showShipping && (
            <div className="bg-white p-6 rounded shadow">
              <ShippingSection register={register} errors={errors} />
            </div>
          )}

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Additional Info</h3>
            <label htmlFor="orderNotes" className="block text-sm font-medium mb-1">
              Order Notes <span className="text-gray-400">(optional)</span>
            </label>
            <textarea
              id="orderNotes"
              {...register("orderNotes")}
              placeholder="Notes about your order"
              className="w-full border border-gray-300 p-4 rounded-lg text-sm text-gray-700 focus:ring-green-500"
              rows={4}
            />
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="bg-white p-6 rounded shadow h-fit">
          <OrderSummary onPlaceOrder={handleSubmit(onSubmit)} />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
