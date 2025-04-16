import { FieldErrors, UseFormRegister } from "react-hook-form";
import { BillingInfo } from "../../../types/types";
import InputField from "./InputField";
import SelectField from "./SelectField";

interface Props {
  register: UseFormRegister<BillingInfo>;
  errors: FieldErrors<BillingInfo>;
}

const BillingSection = ({ register, errors }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
        />

        <InputField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
        />

        <InputField
          label="Company Name"
          name="companyName"
          register={register}
          optional
        />

        <InputField
          label="Street Address"
          name="streetAddress"
          register={register}
          error={errors.streetAddress}
        />

        <SelectField
          label="Country / Region"
          name="country"
          register={register}
          options={["Nepal", "India", "China", "USA"]}
          error={errors.country}
        />

        <SelectField
          label="State"
          name="state"
          register={register}
          options={["Lumbini", "Mumbai", "Beijing", "New York"]}
          error={errors.state}
        />

        <InputField
          label="Zip Code"
          name="zipCode"
          register={register}
          error={errors.zipCode}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />

        <InputField
          label="Phone"
          name="phone"
          type="tel"
          register={register}
          error={errors.phone}
        />

        <InputField
          label="Order Notes"
          name="orderNotes"
          register={register}
          optional
        />
      </div>
    </section>
  );
};

export default BillingSection;
