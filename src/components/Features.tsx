import freeShipping from "../assets/icon/delivery-truck.png";
import customerSupport from "../assets/icon/headphones.png";
import securePayment from "../assets/icon/payment.png";
import moneyGuarantee from "../assets/icon/package.png";

const Features = () => {
  return (
    <section className="mt-6">
      <div className="w-full max-w-[82.5rem] mx-auto shadow-md border rounded-lg bg-white px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16">
          
          {/* Feature Item */}
          <div className="flex items-start lg:items-center gap-4">
            <img src={freeShipping} alt="Free Shipping" className="h-10 w-10" />
            <div>
              <p className="text-black text-base font-semibold">Free Shipping</p>
              <p className="text-gray-500 text-sm">Free shipping on all your orders</p>
            </div>
          </div>

          {/* Feature Item */}
          <div className="flex items-start lg:items-center gap-4">
            <img src={customerSupport} alt="Customer Support 24/7" className="h-10 w-10" />
            <div>
              <p className="text-black text-base font-semibold">Customer Support 24/7</p>
              <p className="text-gray-500 text-sm">Instant access to Support</p>
            </div>
          </div>

          {/* Feature Item */}
          <div className="flex items-start lg:items-center gap-4">
            <img src={securePayment} alt="100% Secure Payment" className="h-10 w-10" />
            <div>
              <p className="text-black text-base font-semibold">100% Secure Payment</p>
              <p className="text-gray-500 text-sm">We ensure your money is safe</p>
            </div>
          </div>

          {/* Feature Item */}
          <div className="flex items-start lg:items-center gap-4">
            <img src={moneyGuarantee} alt="Money-Back Guarantee" className="h-10 w-10" />
            <div>
              <p className="text-black text-base font-semibold">Money-Back Guarantee</p>
              <p className="text-gray-500 text-sm">30 Days Money-Back Guarantee</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
