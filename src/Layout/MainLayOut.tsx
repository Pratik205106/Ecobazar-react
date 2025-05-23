import { NavLink, Outlet } from "react-router";
import phoneImg from "../assets/icon/phone.png";
import { navItems } from "../utils/data";
import TopBar from "../components/TopBar";
import MainHead from "../components/MainHead";
import Footer from "../components/Footer";

const MainLayOut = () => {
  return (
    <>
    <TopBar/>
    <MainHead/>
    <div className="bg-[#333333]"> 
      <section>
      <nav className="container mx-auto flex items-center justify-between py-4 px-2 h-[3.75rem] "> 
        <div className="w-full">
        <ul className="flex gap-5 items-center ">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="whitespace-nowrap hover:text-white transition mr-8"
            >
              <NavLink to={item.path} className="text-[#999999]">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        </div>
        <div className="flex items-center gap-2 justify-center md:justify-end whitespace-nowrap ">
          <img src={phoneImg} alt="Phone" className="h-6"/>
          <span className="text-white text-[21px]">(219) 555-0114</span>
        </div>
      </nav>
      </section>
    </div>
    
    <main>
        <Outlet />
      </main>
      <Footer/>

      </>
  );
};

export default MainLayOut;
