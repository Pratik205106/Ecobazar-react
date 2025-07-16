import { useState, useEffect, useRef } from "react";
import { NavLink, Outlet } from "react-router";
import phoneImg from "../assets/icon/phone.png";
import { navItems } from "../utils/data";
import TopBar from "../components/TopBar";
import MainHead from "../components/MainHead";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

const MainLayOut = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <TopBar />
      <MainHead />
      <div className="bg-[#333333]">
        <section>
          <nav
            className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between py-4 px-4 md:px-2 h-auto md:h-[3.75rem] relative"
            aria-label="Primary Navigation"
          >
            {/* Hamburger button for mobile */}
            <button
              className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              type="button"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Navigation links */}
            <ul
              id="main-navigation"
              ref={menuRef}
              className={`
                md:flex md:flex-row md:items-center md:gap-5
                absolute top-full left-0 right-0 bg-[#333333] md:bg-transparent
                overflow-hidden
                transition-max-height duration-300 ease-in-out
                md:static md:max-h-full
                ${menuOpen ? "max-h-[500px] px-4 py-4" : "max-h-0"}
              `}
            >
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="whitespace-nowrap hover:text-white transition md:mr-8"
                  onClick={() => setMenuOpen(false)} // close menu on link click (mobile)
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold block py-2 md:py-0"
                        : "text-[#999999] block py-2 md:py-0"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Phone info */}
            <div className="flex items-center gap-2 justify-center md:justify-end whitespace-nowrap mt-3 md:mt-0 w-full md:w-auto text-white">
              <img src={phoneImg} alt="Phone" className="h-6" />
              <span className="text-[21px]">(219) 555-0114</span>
            </div>
          </nav>
        </section>
      </div>

      <main>
        <Outlet />
      </main>
<Subscribe/>
      <Footer />
    </>
  );
};

export default MainLayOut;
