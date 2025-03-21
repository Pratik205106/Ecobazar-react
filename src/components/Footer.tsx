import logoImage from "../assets/image/Leaf.png"; 
import appPay from "../assets/image/ApplePay.png";
import visa from "../assets/image/visa-logo.png";
import discoverImg from "../assets/image/Discover.png";
import masterCard from "../assets/image/Mastercard.png";
import securePayment from "../assets/image/lock.png";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center">
              <img src={logoImage} alt="Ecobazar Logo" className="h-6" />
              <h1 className="text-2xl font-semibold ml-2 text-white">Ecobazar</h1>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <div className="mt-4">
              <div className="flex items-center">
                <div>
                <p className="text-sm">(219) 555-0114</p>
                <hr className="w-full border-green-500 my-2" />
                </div>
                <p className="text-gray-400 text-sm mx-2">or</p>
                <div>
                <a  className="text-sm">Proxy@gmail.com</a>
                <hr className="w-full border-green-500 my-2" />
                </div>
              </div>
              
            </div>
          </div>

          <div>
            <h2 className="text-base font-medium mb-3">My Account</h2>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>My Account</li>
              <li>Order History</li>
              <li className='text-white'>Shopping Cart</li>
              <li>Wishlist</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium mb-3">Helps</h2>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Contact</li>
              <li>FAQs</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
             <h2 className="text-base font-medium mb-3">Proxy</h2> 
            <ul className="text-gray-400 text-sm space-y-1">
              <li>About</li>
              <li>Shop</li>
              <li>Product</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div>
             <h2 className="text-base font-medium mb-3">Categories</h2>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Fruit & Vegetables</li>
              <li>Meat & Fish</li>
              <li>Bread & Bakery</li>
              <li>Beauty & Health</li>
            </ul>
          </div>
        </div>


        <div className="flex justify-between items-center mt-10 border-t border-gray-700 pt-4">
          <p className="text-gray-500 text-xs">© Ecobazar eCommerce 2021. All Rights Reserved</p>
          <div className="flex gap-2">
   
    <div className="bg-gray-900 border border-gray-500 rounded-xl p-2 flex items-center">  
      <img src={appPay} alt="Apple Pay" className="h-4 w-auto mr-1" />
    </div>

    <div className="bg-gray-900 border border-gray-500 rounded-xl p-2 flex items-center">  
      <img src={visa} alt="Visa" className="h-4 w-auto" />
    </div>

    
    <div className="bg-gray-900 border border-gray-500 rounded-xl p-2 flex items-center">  
      <img src={discoverImg} alt="Discover" className="h-4 w-auto" />
    </div>

    
    <div className="bg-gray-900 border border-gray-500 rounded-xl p-2 flex items-center">  
      <img src={masterCard} alt="Mastercard" className="h-4 w-auto" />
    </div>

   
    <div className="bg-gray-900 border border-gray-500 rounded-xl p-2 flex items-center">  
    <img src={securePayment} alt="Secure Payment" className="h-4 w-auto mr-1" />
    <span className="text-white text-xs">Secure <p className="font-bold">Payment</p></span>
</div>
  </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;