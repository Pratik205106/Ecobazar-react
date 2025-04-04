import { RouterProvider } from "react-router"
import { route } from "./Routes/Route"
import TopBar from "./components/TopBar"
import MainHead from "./components/MainHead"
import Footer from "./components/Footer"
import Home from "./pages/Home"


const App = () => {
  return (
    <div>
      <div className=" text-gray-600 border-b">
      <TopBar/>
   </div>
    <MainHead/>
    <RouterProvider router={route}/>
    <Home/>
    <Footer/>
    </div>
  )
}

export default App;

