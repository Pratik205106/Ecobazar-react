import freeShipping from "../assets/icon/delivery-truck.png";
import customerSupport from "../assets/icon/headphones.png";
import securePayment from "../assets/icon/payment.png";
import moneyGuarantee from "../assets/icon/package.png";

const Features = () => {
  return (
    <section className="mt-[1.5rem]">
    <div className="w-full max-w-[82.5rem] h-auto lg:h-[8rem] shadow-md border mt-6 flex items-center justify-center mx-auto bg-white rounded-lg px-4 py-6 lg:py-0">
  <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 lg:gap-16 w-full justify-center">

          {/* Feature Item */}
          <div className="flex items-start lg:items-center space-x-4 min-w-[230px]">
            <img src={freeShipping} alt="Free Shipping" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-black text-base font-semibold">Free Shipping</span>
              <span className="text-gray-500 text-sm">Free shipping on all your orders</span>
            </div>
          </div>

          {/* Feature Item */}
          <div className="flex items-start lg:items-center space-x-4 min-w-[230px]">
            <img src={customerSupport} alt="Customer Support 24/7" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-black text-base font-semibold">Customer Support 24/7</span>
              <span className="text-gray-500 text-sm">Instant access to Support</span>
            </div>
          </div>

          {/* Feature Item */}
          <div className="flex items-start lg:items-center space-x-4 min-w-[230px]">
            <img src={securePayment} alt="100% Secure Payment" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-black text-base font-semibold">100% Secure Payment</span>
              <span className="text-gray-500 text-sm">We ensure your money is safe</span>
            </div>
          </div>

          {/* Feature Item */}
          <div className="flex items-start lg:items-center space-x-4 min-w-[230px]">
            <img src={moneyGuarantee} alt="Money-Back Guarantee" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-black text-base font-semibold">Money-Back Guarantee</span>
              <span className="text-gray-500 text-sm">30 Days Money-Back Guarantee</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
