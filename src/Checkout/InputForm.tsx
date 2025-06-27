import { useState, useCallback } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import ShippingForm from "./ShippingForm";
import { BillingInfo } from "../../types/types";
import { UseFormRegister, FieldErrors } from "react-hook-form";

const countryOptions: BillingInfo["country"][] = ["Nepal", "India", "China", "USA"];
const stateOptions: BillingInfo["state"][] = ["Lumbini", "Maharashtra", "Beijing", "New York"];

type InputFormProps = {
  register: UseFormRegister<BillingInfo>;
  errors: FieldErrors<BillingInfo>;
};

const InputForm = ({ register, errors }: InputFormProps) => {
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);

  const toggleShippingAddress = useCallback(() => {
    setShipToDifferentAddress((prev) => !prev);
  }, []);

  return (
    <section className="bg-white rounded-md shadow-md p-8 border border-gray-100">
      <h2 className="text-xl font-semibold mb-6">Billing Details</h2>

      {/* First Name, Last Name, Company */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
          placeholder="Enter first name"
          className="h-[3.0625rem] w-full"
          id="firstName"
        />
        <InputField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
          placeholder="Enter last name"
          className="h-[3.0625rem] w-full"
          id="lastName"
        />
        <InputField
          label="Company Name"
          name="companyName"
          register={register}
          optional
          placeholder="Optional"
          className="h-[3.0625rem] w-full"
          id="companyName"
        />
      </div>

      {/* Street Address */}
      <div className="mt-6">
        <InputField
          label="Street Address"
          name="streetAddress"
          register={register}
          error={errors.streetAddress}
          placeholder="Enter address"
          className="h-[3.0625rem] w-full"
          id="streetAddress"
        />
      </div>

      {/* Country, State, Zip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <SelectField
          label="Country / Region"
          name="country"
          register={register}
          options={countryOptions}
          error={errors.country}
          className="h-[3.0625rem] w-full"
          id="country"
        />
        <SelectField
          label="State"
          name="state"
          register={register}
          options={stateOptions}
          error={errors.state}
          className="h-[3.0625rem] w-full"
          id="state"
        />
        <InputField
          label="Zip Code"
          name="zipCode"
          register={register}
          error={errors.zipCode}
          placeholder="Enter zip"
          className="h-[3.0625rem] w-full"
          id="zipCode"
        />
      </div>

      {/* Email, Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <InputField
          label="Email Address"
          name="email"
          register={register}
          error={errors.email}
          placeholder="Enter email"
          className="h-[3.0625rem] w-full"
          id="email"
        />
        <InputField
          label="Phone Number"
          name="phoneNumber"
          register={register}
          error={errors.phoneNumber}
          placeholder="Enter phone number"
          className="h-[3.0625rem] w-full"
          id="phoneNumber"
        />
      </div>

      {/* Ship to different address */}
      <div className="mt-6">
        <label htmlFor="shipDifferent" className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            id="shipDifferent"
            checked={shipToDifferentAddress}
            onChange={toggleShippingAddress}
            className="form-checkbox h-5 w-5 text-green-600"
          />
          <span className="text-sm text-gray-700">Ship to a different address</span>
        </label>
      </div>

      {/* Conditional Shipping Form */}
      <div
        className={`transition-all duration-300 ${
          shipToDifferentAddress ? "mt-6 max-h-[1000px]" : "max-h-0 overflow-hidden"
        }`}
      >
        {shipToDifferentAddress && (
          <ShippingForm register={register} errors={errors} />
        )}
      </div>
    </section>
  );
};

export default InputForm;
