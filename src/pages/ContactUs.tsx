
import InputForm from "./Checkout/InputForm"
import OrderSummery from "./Checkout/OrderSummery"



const ContactUs = () => {
  return (
   
      <section className="grid grid-cols-2 gap-[31.25rem]">
     <InputForm/>
     <div className="mt-8">
     <OrderSummery/>
     </div>
     </section>
   
  )
}

export default ContactUs