import React from 'react';
import { useForm } from 'react-hook-form';
import { BillingFormData } from '../utils/typesss';

const CheckoutForm: React.FC = () => {
  const { register, handleSubmit,  } = useForm<BillingFormData>({
    defaultValues: {
      paymentMethod: 'cash',
    }
  });

  const onSubmit = (data: BillingFormData) => {
    console.log('Form Submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white shadow rounded-lg">
      {/* Billing Information */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-xl font-semibold">Billing Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input {...register('firstName')} placeholder="Your first name" className="input" />
          <input {...register('lastName')} placeholder="Your last name" className="input" />
          <input {...register('companyName')} placeholder="Company name (optional)" className="input" />
        </div>
        <input {...register('street')} placeholder="Street address" className="input w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select {...register('country')} className="input">
            <option value="">Select Country</option>
            <option value="np">Nepal</option>
            <option value="us">USA</option>
          </select>
          <input {...register('state')} placeholder="State" className="input" />
          <input {...register('zipCode')} placeholder="Zip Code" className="input" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input {...register('email')} type="email" placeholder="Email address" className="input" />
          <input {...register('phone')} type="tel" placeholder="Phone number" className="input" />
        </div>

        <div>
          <h3 className="text-lg font-medium mt-4">Additional Info</h3>
          <textarea {...register('orderNotes')} placeholder="Notes about your order..." className="input w-full h-20 mt-2" />
        </div>
      </div>

      {/* Order Summary & Payment */}
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span>Green Capsicum x5</span>
              <span>$70.00</span>
            </div>
            <div className="flex justify-between">
              <span>Red Capsicum x1</span>
              <span>$14.00</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>$84.00</span>
            </div>
            <div className="text-green-600 text-sm">Shipping: Free</div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" {...register('paymentMethod')} value="cash" />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" {...register('paymentMethod')} value="paypal" />
              PayPal
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" {...register('paymentMethod')} value="amazon" />
              Amazon Pay
            </label>
          </div>
        </div>

        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-lg">
          Place Order
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
