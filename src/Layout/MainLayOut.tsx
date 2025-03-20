import { NavLink, Outlet } from "react-router";
import phoneImg from "../assets/icon/phone.png";
import { navItems } from "../utils/data";



const MainLayOut = () => {
  return (
<header>
  <nav className="bg-[#333333] h-[3.75rem] flex justify-center items-center">
    <ul className="grid grid-cols-6 gap-6 mr-96">
      {navItems.map((item, index)=>(
        <li key={index} className="whitespace-nowrap hover:text-white transition ">
<NavLink to={item.path}
className="text-[#999999]"> 
{item.name} 
</NavLink>
</li>
      ))}
      
    </ul>
<img src={phoneImg} alt=""  className=""/>
<span className="text-white text-[21px]">(219) 555-0114</span>
  </nav>
  <main>
  <Outlet/>
  </main>
</header>
  )
}

export default MainLayOut;