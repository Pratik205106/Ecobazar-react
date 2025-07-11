
// import { useForm } from "react-hook-form";
// import BillingSection from "./BillingSection";
// import { BillingInfo } from "../../types/types";

// const FormWrapper = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<BillingInfo>({
//     mode: "onBlur",
//   });

//   const onSubmit = (data: BillingInfo) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} noValidate>
//       <BillingSection register={register} errors={errors} />
//       <button
//         type="submit"
//         className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default FormWrapper;
