// import { FieldErrors, UseFormRegister } from "react-hook-form";
// import { BillingInfo } from "../../types/types";
// import InputField from "./InputField";
// import SelectField from "./SelectField";

// interface Props {
//   register: UseFormRegister<BillingInfo>;
//   errors: FieldErrors<BillingInfo>;
// }

// const BillingSection = ({ register, errors }: Props) => {
//   return (
//     <section className="p-4">
//       <div className="grid gap-6">
//         {/* Row 1: First Name, Last Name, Company Name */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <InputField
//             label="First Name"
//             name="firstName"
//             placeholder="Your first name"
//             register={register}
//             error={errors.firstName}
//             className="w-[280px]"
//           />
//           <InputField
//             label="Last Name"
//             name="lastName"
//             placeholder="Your last name"
//             register={register}
//             error={errors.lastName}
//             className="w-[280px]"
//           />
//           <InputField
//             label="Company Name"
//             name="companyName"
//             placeholder="Company name"
//             register={register}
//             optional
//             error={errors.companyName}
//             className="w-[280px]"
//           />
//         </div>

//         {/* Row 2: Street Address */}
//         <div>
//           <InputField
//             label="Street Address"
//             name="streetAddress"
//             placeholder="St. address"
//             register={register}
//             error={errors.streetAddress}
//             className="w-[872px]"
//           />
//         </div>

//         {/* Row 3: Country, State, Zip */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <SelectField
//             label="Country / Region"
//             name="country"
//             placeholder="Country"
//             options={["Nepal", "India", "China", "USA"]}
//             register={register}
//             error={errors.country}
//             className="w-[280px]"
//           />
//           <SelectField
//             label="State"
//             name="state"
//             placeholder="State"
//             options={["Lumbini", "Mumbai", "Beijing", "New York"]}
//             register={register}
//             error={errors.state}
//             className="w-[280px]"
//           />
//           <InputField
//             label="Zip Code"
//             name="zipCode"
//             placeholder="ZIP code"
//             register={register}
//             error={errors.zipCode}
//             className="w-[280px]"
//           />
//         </div>

//         {/* Row 4: Email, Phone */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <InputField
//             label="Email"
//             name="email"
//             type="email"
//             placeholder="Email"
//             register={register}
//             error={errors.email}
//             className="w-[428px]"
//           />
//           <InputField
//             label="Phone"
//             name="phoneNumber"
//             type="tel"
//             placeholder="+977-9800000000"
//             register={register}
//             error={errors.phoneNumber}
//             className="w-[428px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BillingSection;

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { BillingInfo } from "../../types/types";
import InputField from "./InputField";
import SelectField from "./SelectField";

interface Props {
  register: UseFormRegister<BillingInfo>;
  errors: FieldErrors<BillingInfo>;
}

const BillingSection = ({ register, errors }: Props) => {
  return (
    <section className="p-4">
      <div className="grid gap-6">

        {/* Row 1: First Name, Last Name, Company Name */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            register={register}
            error={errors.firstName}
            requiredMessage="First Name is required"
            className="w-full"
          />
          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            register={register}
            error={errors.lastName}
            requiredMessage="Last Name is required"
            className="w-full"
          />
          <InputField
            label="Company Name"
            name="companyName"
            placeholder="Company name"
            register={register}
            error={errors.companyName}
            optional
            className="w-full"
          />
        </div>

        {/* Row 2: Street Address */}
        <InputField
          label="Street Address"
          name="streetAddress"
          placeholder="Street address"
          register={register}
          error={errors.streetAddress}
          requiredMessage="Street Address is required"
          className="w-full"
        />

        {/* Row 3: Country, State, Zip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SelectField
            label="Country / Region"
            name="country"
            placeholder="Select country"
            options={["Nepal", "India", "China", "USA"]}
            register={register}
            error={errors.country}
            requiredMessage="Country is required"
            className="w-full"
          />
          <SelectField
            label="State"
            name="state"
            placeholder="Select state"
            options={["Lumbini", "Mumbai", "Beijing", "New York"]}
            register={register}
            error={errors.state}
            requiredMessage="State is required"
            className="w-full"
          />
          <InputField
            label="Zip Code"
            name="zipCode"
            placeholder="ZIP code"
            register={register}
            error={errors.zipCode}
            requiredMessage="Zip Code is required"
            className="w-full"
          />
        </div>

        {/* Row 4: Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            register={register}
            error={errors.email}
            requiredMessage="Email is required"
            className="w-full"
          />
          <InputField
            label="Phone"
            name="phoneNumber"
            type="tel"
            placeholder="+977-9800000000"
            register={register}
            error={errors.phoneNumber}
            requiredMessage="Phone number is required"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BillingSection;
