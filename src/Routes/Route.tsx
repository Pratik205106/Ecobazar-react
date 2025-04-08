import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Pages from "../pages/Pages";
import Blog from "../pages/Blog";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";



export const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/page',
        element: <Pages/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/about',
        element: <AboutUs/>
      },
      {
        path: '/contact',
        element: <ContactUs/>
      }
    ]
  }
])

export default route;