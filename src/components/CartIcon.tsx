import { BsHandbag } from "react-icons/bs";
 // ✅ update this based on your actual file

const CartIcon = () => {
 

  return (
    <div className="relative cursor-pointer">
      <BsHandbag className="h-[2.125rem] w-[2.125rem]" />
   
        <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border border-white">
          
        </span>
      
    </div>
  );
};

export default CartIcon;
