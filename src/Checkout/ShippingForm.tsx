import InputField from "./InputField";
import SelectField from "./SelectField";
import { BillingInfo } from "../../types/types";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface Props {
  register: UseFormRegister<BillingInfo>;
  errors: FieldErrors<BillingInfo>;
}

const countryOptions = ["Nepal", "India", "China", "USA"];
const stateOptions = ["Lumbini", "Maharashtra", "Beijing", "New York"];

const ShippingForm = ({ register, errors }: Props) => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-medium">Shipping Address</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        <InputField
          label="Shipping First Name"
          name="shippingFirstName"
          register={register}
          error={errors.shippingFirstName}
          placeholder="Enter first name"
          className="h-[3.0625rem] w-[17.5rem]"
        />
        <InputField
          label="Shipping Last Name"
          name="shippingLastName"
          register={register}
          error={errors.shippingLastName}
          placeholder="Enter last name"
          className="h-[3.0625rem] w-[17.5rem]"
        />
        <InputField
          label="Shipping Company Name"
          name="shippingCompanyName"
          register={register}
          optional={true}
          placeholder="Optional"
          className="h-[3.0625rem] w-[17.5rem]"
        />
      </div>

      <div className="mt-4">
        <InputField
          label="Shipping Street Address"
          name="shippingStreetAddress"
          register={register}
          error={errors.shippingStreetAddress}
          placeholder="Enter your street address"
          className="h-[3.0625rem] w-full"
        />
      </div>

      <div className="flex gap-4 mt-4">
        <SelectField
          label="Shipping Country / Region"
          name="shippingCountry"
          register={register}
          options={countryOptions}
          error={errors.shippingCountry}
          className="h-[3.0625rem] w-[17.5rem]"
        />
        <SelectField
          label="Shipping State"
          name="shippingState"
          register={register}
          options={stateOptions}
          error={errors.shippingState}
          className="h-[3.0625rem] w-[17.5rem]"
        />
        <InputField
          label="Shipping Zip Code"
          name="shippingZipCode"
          register={register}
          error={errors.shippingZipCode}
          placeholder="Enter zip code"
          className="h-[3.0625rem] w-[17.5rem]"
        />
      </div>
    </section>
  );
};

export default ShippingForm;
