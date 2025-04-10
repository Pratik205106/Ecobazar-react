import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { BillingFormData } from '../utils/typesss';



const Form: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BillingFormData>({
      defaultValues: {
        paymentMethod: 'cash',
        country: '',
      }
    });

    const onSubmit: SubmitHandler<BillingFormData> = (data) => {
      console.log('Form Submitted:', data);
      return new Promise(resolve => setTimeout(resolve, 1000));
    };

    const renderError = (fieldName: keyof BillingFormData) => {
      const error = errors[fieldName];
      return error && typeof error.message === 'string' && (
        <span className="text-red-500 text-xs mt-1 block">{error.message}</span>
      );
    };

    const inputBaseClass = "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm";
    const inputErrorClass = "border-red-500 focus:ring-red-500 focus:border-red-500";
    const visuallyHiddenClass = "sr-only";

    return (
    
      <section>
    
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 sm:p-6 bg-white ">

         
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Billing Information</h2>

       
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                {/* First Name */}
                <div>
                    <span className="block text-sm font-medium text-gray-700 mb-1">First name</span>
                    <label htmlFor="firstName" className={visuallyHiddenClass}>First Name</label>
                    <input
                      id="firstName"
                      {...register('firstName', { required: 'First name is required' })}
                      placeholder="Your first name"
                      className={`${inputBaseClass} ${errors.firstName ? inputErrorClass : ''}`}
                      aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {renderError('firstName')}
                </div>

                {/* Last Name */}
                <div>
                    <span className="block text-sm font-medium text-gray-700 mb-1">Last name</span>
                    <label htmlFor="lastName" className={visuallyHiddenClass}>Last Name</label>
                    <input
                      id="lastName"
                      {...register('lastName', { required: 'Last name is required' })}
                      placeholder="Your last name"
                      className={`${inputBaseClass} ${errors.lastName ? inputErrorClass : ''}`}
                      aria-invalid={errors.lastName ? "true" : "false"}
                    />
                    {renderError('lastName')}
                </div>

                {/* Company Name */}
                <div>
                    <span className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className="text-gray-500">(optional)</span></span>
                    <label htmlFor="companyName" className={visuallyHiddenClass}>Company Name</label>
                    <input
                      id="companyName"
                      {...register('companyName')}
                      placeholder="Company name"
                      className={`${inputBaseClass}`}
                    />
                </div>
            </div>

            {/* Street Address */}
            <div>
                <span className="block text-sm font-medium text-gray-700 mb-1">Street Address</span>
                <label htmlFor="street" className={visuallyHiddenClass}>Street Address</label>
                <input
                  id="street"
                  {...register('street', { required: 'Street address is required' })}
                  placeholder="Street address"
                  className={`${inputBaseClass} w-full ${errors.street ? inputErrorClass : ''}`}
                  aria-invalid={errors.street ? "true" : "false"}
                />
                {renderError('street')}
            </div>

            {/* Location Fields Group */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                {/* Country / Region */}
                <div>
                    <span className="block text-sm font-medium text-gray-700 mb-1">Country / Region</span>
                    <label htmlFor="country" className={visuallyHiddenClass}>Country / Region</label>
                    <div className="relative">
                        <select
                          id="country"
                          {...register('country', { required: 'Please select a country' })}
                          className={`${inputBaseClass} ${errors.country ? inputErrorClass : ''} appearance-none`}
                          aria-invalid={errors.country ? "true" : "false"}
                        >
                          <option value="">Select</option>
                          <option value="NP">Nepal</option>
                          <option value="US">USA</option>
                        </select>
                      
                    </div>
                    {renderError('country')}
                </div>

                {/* States */}
                <div>
                    <span className="block text-sm font-medium text-gray-700 mb-1">States</span>
                    <label htmlFor="state" className={visuallyHiddenClass}>States</label>
                    <input
                      id="state"
                      {...register('state', { required: 'State is required' })}
                      placeholder="Selects"
                      className={`${inputBaseClass} ${errors.state ? inputErrorClass : ''}`}
                      aria-invalid={errors.state ? "true" : "false"}
                    />
                    {renderError('state')}
                </div>

                {/* Zip Code */}
                <div>
                    <span className="block text-sm font-medium text-gray-700 mb-1">Zip Code</span>
                    <label htmlFor="zipCode" className={visuallyHiddenClass}>Zip Code</label>
                    <input
                      id="zipCode"
                      {...register('zipCode', { required: 'Zip code is required' })}
                      placeholder="Zip Code"
                      className={`${inputBaseClass} ${errors.zipCode ? inputErrorClass : ''}`}
                      aria-invalid={errors.zipCode ? "true" : "false"}
                    />
                    {renderError('zipCode')}
                </div>
            </div>

            {/* Contact Fields Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                {/* Email */}
                <div>
                    <span className="block text-sm font-medium text-gray-700 mb-1">Email</span>
                    <label htmlFor="email" className={visuallyHiddenClass}>Email</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
                      })}
                      placeholder="Email Address"
                      className={`${inputBaseClass} ${errors.email ? inputErrorClass : ''}`}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {renderError('email')}
                </div>

                {/* Phone */}
                <div>
                    <span className="block text-sm font-medium text-gray-700 mb-1">Phone</span>
                    <label htmlFor="phone" className={visuallyHiddenClass}>Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      placeholder="Phone number"
                      className={`${inputBaseClass} ${errors.phone ? inputErrorClass : ''}`}
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {renderError('phone')}
                </div>
            </div>


            {/* Additional Info Section */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Additional Info</h3>
              <span className="block text-sm font-medium text-gray-700 mb-1">Order Notes <span className="text-gray-500">(Optional)</span></span>
              <label htmlFor="orderNotes" className={visuallyHiddenClass}>Order Notes</label>
              <textarea
                id="orderNotes"
                {...register('orderNotes')}
                placeholder="Notes about your order, e.g. special notes for delivery."
                className={`${inputBaseClass} h-24`}
              />
            </div>
          </div>


          {/* Order Summary & Payment Section */}
          {/* This column now has a 24px gap (gap-6) from the billing column on lg screens */}
          <div className="space-y-6">
            {/* Order Summary Box */}
            <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-gray-600">Green Capsicum x5</span>
                  <span className="font-medium text-gray-900">$70.00</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-gray-600">Red Capsicum x1</span>
                  <span className="font-medium text-gray-900">$14.00</span>
                </div>
               
                <div className="space-y-1">
                  <div className="flex justify-between text-gray-600 mt-[0.75rem]">
                    <span>Subtotal:</span>
                    <span className="font-medium text-gray-900">$84.00</span>
                  </div>
                  <hr className="my-3 border-t border-gray-200"/>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping:</span>
                    <span className="font-medium text-gray-900">Free</span>
                  </div>
                </div>
                <hr className="my-3 border-t border-gray-200"/>
                <div className="flex justify-between font-semibold text-base text-gray-900">
                  <span>Total:</span>
                  <span>$84.00</span>
                </div>
              </div>
           

            {/* Payment Method Box */}
           
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Payment Method</h3>
              <input type="hidden" {...register('paymentMethod', { required: 'Please select a payment method' })} />
              <div className="text-sm">
                <label className="flex items-center gap-3 p-3 ">
                  <input type="radio" {...register('paymentMethod')} value="cash" id="paymentCash"  className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500 cursor-pointer accent-green-600"/>
                  <span className="text-gray-700 select-none">Cash on Delivery</span>
                </label>
                <label className="flex items-center gap-3 p-3 ">
                  <input type="radio" {...register('paymentMethod')} value="paypal" id="paymentPaypal"  className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500 cursor-pointer accent-green-600"/>
                  <span className="text-gray-700 select-none">PayPal</span>
                </label>
                <label className="flex items-center gap-3 p-3">
                  <input type="radio" {...register('paymentMethod')} value="amazon" id="paymentAmazon"  className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500 cursor-pointer accent-green-600"/>
                  <span className="text-gray-700 select-none">Amazon Pay</span>
                </label>
              </div>
              <div className="mt-2">
                {renderError('paymentMethod')}
              </div>
          

         {/* Submit Button */}
<button
  type="submit"
  disabled={isSubmitting}
  className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : 'active:bg-green-800'}`}
>
  {isSubmitting ? 'Submitting...' : 'Place Order'}
</button>

          </div>
          </div>
        </form>
      </section>
    );
  };

export default Form;