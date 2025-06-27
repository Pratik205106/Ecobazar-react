import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io"
import { NavLink } from "react-router-dom";

type ButtonsProps= {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const Buttons = ({
  label= "Shop now",
  icon= <IoIosArrowRoundForward size={24}/>,
  onClick,
  bgColor= "",
  textColor= "",
  className= "",
}: ButtonsProps) => {
  return (
    <NavLink to="/shop">
  <button 
  onClick={onClick}
  className={`h-[3.1875rem] w-[11.9375rem] rounded-3xl font-semibold flex items-center justify-center space-x-2 absolute ${bgColor} ${textColor} ${className}`}
  >
<span>{label}</span>
{icon}
  </button>
  </NavLink>
  )
}

export default Buttons;

