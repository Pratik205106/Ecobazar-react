// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import BillingSection from "../Checkout/BillingSection";
// import ShippingSection from "../Checkout/ShippingForm";
// import OrderSummary from "../Checkout/OrderSummery";
// import { BillingInfo } from "../../types/types";

// const Checkout = () => {
//   const [showShipping, setShowShipping] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<BillingInfo>();

//   const onSubmit = (data: BillingInfo) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto px-4 py-12">
     

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="grid grid-cols-1 lg:grid-cols-3 space-x-24"
//       >
//         {/* Left Side: Billing + Optional Shipping */}
//         <div className="lg:col-span-2 space-10">
//           {/* Billing Info */}
//           <div className="bg-white">
//             <h3 className="text-xl font-semibold mb-6">Billing Information</h3>
//             <BillingSection register={register} errors={errors} />
//           </div>

//           {/* Shipping checkbox */}
//           <div className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               id="ship-different"
//               checked={showShipping}
//               onChange={() => setShowShipping(!showShipping)}
//               className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//             />
//             <label htmlFor="ship-different" className="text-sm text-gray-700">
//               Ship to a different address
//             </label>
//           </div>

//           {/* Shipping Info (optional) */}
//           {showShipping && (
//             <div className="bg-white ">
//               <ShippingSection register={register} errors={errors} />
//             </div>
//           )}

//           {/* Additional Info */}
//         <div className="bg-white mt-8">
//   <h3 className="text-xl font-semibold mb-4 text-gray-800">Additional Info</h3>

//   <label htmlFor="orderNotes" className="block text-sm font-medium text-gray-700 mb-1">
//     Order Notes <span className="text-gray-400">(optional)</span>
//   </label>
  
//   <textarea
//     id="orderNotes"
//     {...register("orderNotes")}
//     placeholder="Notes about your order, e.g. special notes for delivery"
//     className="w-[872px] border border-gray-300 p-4 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//     rows={4}
//   />
// </div>

//         </div>
//           <OrderSummary />
//       </form>
//     </div>
//   );
// };

// export default Checkout;




// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import BillingSection from "../Checkout/BillingSection";
// import ShippingSection from "../Checkout/ShippingForm";
// import OrderSummary from "../Checkout/OrderSummery";
// import { BillingInfo } from "../../types/types";

// const Checkout = () => {
//   const [showShipping, setShowShipping] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     getValues,
//   } = useForm<BillingInfo>();

//   const onSubmit = (data: BillingInfo) => {
//     console.log("Form Data:", data);
//     // navigate to order summary or process order here
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto px-4 py-12">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="grid grid-cols-1 lg:grid-cols-3 space-x-24"
//       >
//         <div className="lg:col-span-2 space-y-10">
//           <div className="bg-white">
//             <h3 className="text-xl font-semibold mb-6">Billing Information</h3>
//             <BillingSection register={register} errors={errors} />
//           </div>

//           <div className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               id="ship-different"
//               checked={showShipping}
//               onChange={() => setShowShipping(!showShipping)}
//               className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//             />
//             <label htmlFor="ship-different" className="text-sm text-gray-700">
//               Ship to a different address
//             </label>
//           </div>

//           {showShipping && (
//             <div className="bg-white">
//               <ShippingSection register={register} errors={errors} />
//             </div>
//           )}

//           <div className="bg-white mt-8">
//             <h3 className="text-xl font-semibold mb-4 text-gray-800">Additional Info</h3>
//             <label htmlFor="orderNotes" className="block text-sm font-medium text-gray-700 mb-1">
//               Order Notes <span className="text-gray-400">(optional)</span>
//             </label>
//             <textarea
//               id="orderNotes"
//               {...register("orderNotes")}
//               placeholder="Notes about your order"
//               className="w-[872px] border border-gray-300 p-4 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//               rows={4}
//             />
//           </div>
//         </div>

//         {/* ✅ OrderSummary inside form, connected to handleSubmit */}
//         <OrderSummary
//           onPlaceOrder={handleSubmit(onSubmit)}
//           billingInfo={getValues()}
//         />
//       </form>
//     </div>
//   );
// };

// export default Checkout;




import { useForm } from "react-hook-form";
import { useState } from "react";
import BillingSection from "../Checkout/BillingSection";
import ShippingSection from "../Checkout/ShippingForm";
import OrderSummary from "../Checkout/OrderSummery";
import { BillingInfo } from "../../types/types";

const Checkout = () => {
  const [showShipping, setShowShipping] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingInfo>();

  const onSubmit = (data: BillingInfo) => {
    console.log("✅ Form Data Submitted:", data);
    alert("🎉 Order placed successfully!");
    // Optionally navigate or send to backend here
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-10"
      >
        {/* LEFT: Billing + Shipping + Notes */}
        <div className="lg:col-span-2 space-y-10">
          {/* Billing Section */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-6">Billing Information</h3>
            <BillingSection register={register} errors={errors} />
          </div>

          {/* Ship to different address toggle */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="ship-different"
              checked={showShipping}
              onChange={() => setShowShipping(!showShipping)}
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="ship-different" className="text-sm text-gray-700">
              Ship to a different address
            </label>
          </div>

          {/* Optional Shipping Section */}
          {showShipping && (
            <div className="bg-white p-6 rounded shadow">
              <ShippingSection register={register} errors={errors} />
            </div>
          )}

          {/* Additional Order Notes */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Additional Info</h3>
            <label
              htmlFor="orderNotes"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Order Notes <span className="text-gray-400">(optional)</span>
            </label>
            <textarea
              id="orderNotes"
              {...register("orderNotes")}
              placeholder="Notes about your order"
              className="w-full border border-gray-300 p-4 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
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
