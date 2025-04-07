import freeShipping from "../assets/icon/delivery-truck.png";
import customerSupport from "../assets/icon/headphones.png";
import securePayment from "../assets/icon/payment.png";
import moneyGuarantee from "../assets/icon/package.png";


const Features = () => {
  return (
    <section>
    <div className="h-[8rem] w-[82.5rem] shadow-md border mt-[1.5rem] flex items-center justify-center mx-auto bg-white rounded-lg">
    <div className="flex items-center gap-16 m-[2.5rem]">
      
      
      <div className="flex items-center space-x-4">
        <img src={freeShipping} alt="Free Shipping" className="h-10 w-10" />
        <div className="flex flex-col">
          <span className="text-black text-lg font-semibold">Free Shipping</span>
          <span className="text-gray-500 text-sm">Free shipping on all your orders</span>
        </div>
      </div>
  
     
      <div className="flex items-center space-x-4">
        <img src={customerSupport} alt="Customer Support 24/7" className="h-10 w-10" />
        <div className="flex flex-col">
          <span className="text-black text-lg font-semibold">Customer Support 24/7</span>
          <span className="text-gray-500 text-sm">Instant access to Support</span>
        </div>
      </div>
  
      
      <div className="flex items-center space-x-4">
        <img src={securePayment} alt="100% Secure Payment" className="h-10 w-10" />
        <div className="flex flex-col">
          <span className="text-black text-lg font-semibold">100% Secure Payment</span>
          <span className="text-gray-500 text-sm">We ensure your money is safe</span>
        </div>
      </div>
  
      
      <div className="flex items-center space-x-4">
        <img src={moneyGuarantee} alt="Money-Back Guarantee" className="h-10 w-10" />
        <div className="flex flex-col">
          <span className="text-black text-lg font-semibold">Money-Back Guarantee</span>
          <span className="text-gray-500 text-sm">30 Days Money-Back Guarantee</span>
        </div>
      </div>
  
    </div>
  </div>
  </section>
  )
}

export default Features;
