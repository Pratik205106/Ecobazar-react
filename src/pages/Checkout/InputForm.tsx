import { useForm } from "react-hook-form";
import { BillingInfo } from "../../../types/types";
import InputField from "./InputField";
import SelectField from "./SelectField";
import CheckBoxField from "./CheckBoxField"; // Import CheckBoxField


const InputForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BillingInfo>();

  const onSubmit = (data: BillingInfo) => {
    console.log("Bill submitted", data);
  };

  

  // Track if "Ship to different address" checkbox is checked
  const shipToDifferentAddress = watch("shipToDifferentAddress");

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <main className="w-[54.5rem] h-[44.125rem] mt-4">
          <div className="w-[54.5rem] h-[28.5625rem]">
            <h1 className="text-[#1A1A1A] text-2xl font-medium">
              Billing Information
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start mt-5">
              <InputField
                label="First Name"
                name="firstName"
                register={register}
                error={errors.firstName}
                placeholder="Enter your first name"
                className="h-[3.0625rem] w-[17.5rem] mt-2"
              />
              <InputField
                label="Last Name"
                name="lastName"
                register={register}
                error={errors.lastName}
                placeholder="Enter your last name"
                className="h-[3.0625rem] w-[17.5rem] mt-2"
              />
              <InputField
                label="Company Name"
                name="companyName"
                register={register}
                optional
                placeholder="Enter your company name (optional)"
                className="h-[3.0625rem] w-[17.5rem] mt-2"
              />
            </div>

            <div className="flex mt-4">
              <InputField
                label="Street Address"
                name="streetAddress"
                register={register}
                error={errors.streetAddress}
                placeholder="Enter your street address"
                className="h-[3.0625rem] w-[54.5rem] mt-2"
              />
            </div>

            <div className="flex gap-4">
              <SelectField
                label="Country / Region"
                name="country"
                register={register}
                options={["Nepal", "India", "China", "USA"]}
                error={errors.country}
                className="h-[3.0625rem] w-[17.5rem] mt-2"
              />
              <SelectField
                label="State"
                name="state"
                register={register}
                options={["Lumbini", "Mumbai", "Beijing", "New York"]}
                error={errors.state}
                className="h-[3.0625rem] w-[17.5rem] mt-2"
              />
              <InputField
                label="Zip Code"
                name="zipCode"
                register={register}
                error={errors.zipCode}
                placeholder="Enter your zip code"
                className="h-[3.0625rem] w-[17.5rem] mt-2"
              />
            </div>

            <div className="flex gap-4">
              <InputField
                label="Email"
                name="email"
                register={register}
                error={errors.email}
                placeholder="Enter your email"
                className="h-[3.0625rem] w-[26.75rem] mt-2"
              />
              <InputField
                label="Phone"
                name="phone"
                register={register}
                error={errors.phone}
                placeholder="Enter your phone number"
                className="h-[3.0625rem] w-[26.75rem] mt-2"
              />
            </div>
          </div>

          <div className="h-[1.3125rem] w-[13.1875rem] mt-4">
            <CheckBoxField
              label="Ship to a different address"
              {...register("shipToDifferentAddress")}
            />
          </div>

          {/* Conditionally render shipping address fields if checkbox is checked */}
          {shipToDifferentAddress && (
            <div className="mt-8">
              <h2 className="text-xl font-medium">Shipping Address</h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start mt-5">
                <InputField
                  label="Shipping First Name"
                  name="shippingFirstName"
                  register={register}
                  placeholder="Enter shipping first name"
                  className="h-[3.0625rem] w-[17.5rem] mt-2"
                />
                <InputField
                  label="Shipping Last Name"
                  name="shippingLastName"
                  register={register}
                  placeholder="Enter shipping last name"
                  className="h-[3.0625rem] w-[17.5rem]"
                />
                <InputField
                  label="Shipping Company Name"
                  name="shippingCompanyName"
                  register={register}
                  optional
                  placeholder="Enter shipping company name"
                  className="h-[3.0625rem] w-[17.5rem]"
                />
              </div>

              <div className="flex mt-4">
                <InputField
                  label="Shipping Street Address"
                  name="shippingStreetAddress"
                  register={register}
                  placeholder="Enter shipping street address"
                  className="h-[3.0625rem] w-[54.5rem]"
                />
              </div>

              <div className="flex gap-4">
                <SelectField
                  label="Shipping Country / Region"
                  name="shippingCountry"
                  register={register}
                  options={["Nepal", "India", "China", "USA"]}
                  className="h-[3.0625rem] w-[17.5rem]"
                />
                <SelectField
                  label="Shipping State"
                  name="shippingState"
                  register={register}
                  options={["Lumbini", "Mumbai", "Beijing", "New York"]}
                  className="h-[3.0625rem] w-[17.5rem]"
                />
                <InputField
                  label="Shipping Zip Code"
                  name="shippingZipCode"
                  register={register}
                  placeholder="Enter shipping zip code"
                  className="h-[3.0625rem] w-[17.5rem]"
                />
              </div>

              <div className="flex gap-4">
                <InputField
                  label="Shipping Email"
                  name="shippingEmail"
                  register={register}
                  placeholder="Enter shipping email"
                  className="h-[3.0625rem] w-[26.75rem]"
                />
                <InputField
                  label="Shipping Phone"
                  name="shippingPhone"
                  register={register}
                  placeholder="Enter shipping phone number"
                  className="h-[3.0625rem] w-[26.75rem]"
                />
              </div>
            </div>
          )}

          <hr className="border border-[#E6E6E6] mt-8" />

          <div className="mt-8">
            <h1 className="text-[#1A1A1A] text-6 font-medium">
              Additional Info
            </h1>

            <div>
              <div className="mt-5">
                <InputField
                  label="Order Notes"
                  name="orderNotes"
                  register={register}
                  optional
                  placeholder="Add any special instructions or notes"
                  className="h-[6.25rem] w-[54.5rem] mb-[5rem]"
                />
              </div>
            </div>
          </div>
        </main>
      </form>
    </section>
  );
};

export default InputForm;
