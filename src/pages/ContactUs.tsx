import InputForm from "../Checkout/InputForm";
import OrderSummery from "../Checkout/OrderSummery";
import { extraProducts, PopularProduct } from "../utils/data"; // adjust path as needed

const ContactUs = () => {
  const selectedProducts = [PopularProduct[8], extraProducts[5]];

  return (
    <section className="grid grid-cols-2 gap-[31.25rem]">
      <InputForm />
      <div className="mt-8">
        <OrderSummery products={selectedProducts} />
      </div>
    </section>
  );
};

export default ContactUs;
