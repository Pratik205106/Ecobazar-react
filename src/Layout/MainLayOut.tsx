import { NavLink, Outlet } from "react-router";
import phoneImg from "../assets/icon/phone.png";
import { navItems } from "../utils/data";



const MainLayOut = () => {
  return (
<header>
  <nav className="bg-[#333333] h-[3.75rem] flex justify-center items-center">
    <ul className="grid grid-cols-6 gap-6 mr-[33.125rem]">
      {navItems.map((item, index)=>(
        <li key={index} className="whitespace-nowrap hover:text-white transition ">
<NavLink to={item.path}
className="text-[#999999]"> 
{item.name} 
</NavLink>
</li>
      ))}
      
    </ul>
    <div className="flex items-center gap-2 justify-center md:justify-end">
            <img src={phoneImg} alt="Phone" className="h-6" />
            <span className="text-white text-[21px]">(219) 555-0114</span>
          </div>
  </nav>
  <main>
  <Outlet/>
  </main>
</header>
  )
}

export default MainLayOut;