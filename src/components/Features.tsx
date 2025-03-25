import freeShipping from "../assets/icon/delivery-truck.png";
import customerSupport from "../assets/icon/headphones.png";
import securePayment from "../assets/icon/payment.png";
import moneyGuarantee from "../assets/icon/package.png";


const Features = () => {
  return (
    <div className="h-[128px] w-full bg-white shadow-xl ">
    <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-[40px] py-4">
      
      {/* Free Shipping */}
      <div className="flex items-center space-x-4">
        <img src={freeShipping} alt="Free Shipping" className="h-10 w-10" />
        <div className="flex flex-col">
          <span className="text-black text-lg font-semibold">Free Shipping</span>
          <span className="text-gray-500 text-sm">Free shipping on all your orders</span>
        </div>
      </div>
  
      {/* Customer Support */}
      <div className="flex items-center space-x-4">
        <img src={customerSupport} alt="Customer Support 24/7" className="h-10 w-10" />
        <div className="flex flex-col">
          <span className="text-black text-lg font-semibold">Customer Support 24/7</span>
          <span className="text-gray-500 text-sm">Instant access to Support</span>
        </div>
      </div>
  
      {/* Secure Payment */}
      <div className="flex items-center space-x-4">
        <img src={securePayment} alt="100% Secure Payment" className="h-10 w-10" />
        <div className="flex flex-col">
          <span className="text-black text-lg font-semibold">100% Secure Payment</span>
          <span className="text-gray-500 text-sm">We ensure your money is safe</span>
        </div>
      </div>
  
      {/* Money-Back Guarantee */}
      <div className="flex items-center space-x-4">
        <img src={moneyGuarantee} alt="Money-Back Guarantee" className="h-10 w-10" />
        <div className="flex flex-col">
          <span className="text-black text-lg font-semibold">Money-Back Guarantee</span>
          <span className="text-gray-500 text-sm">30 Days Money-Back Guarantee</span>
        </div>
      </div>
  
    </div>
  </div>
  
  )
}

export default Features;
