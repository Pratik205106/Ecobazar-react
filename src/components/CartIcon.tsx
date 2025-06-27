import { BsHandbag } from "react-icons/bs";
import { useCartStore } from "../store/useCartStore";

const CartIcon = () => {
 const totalItems= useCartStore((state)=> state.totalItems);

  return (
    <div className="relative cursor-pointer">
      <BsHandbag className="h-[2.125rem] w-[2.125rem]" />
   {totalItems > 0 && (
    <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border border-white">
      {totalItems}
    </span>
   )}
      
    </div>
  );
};

export default CartIcon;
