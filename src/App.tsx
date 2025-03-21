import { RouterProvider } from "react-router"
import { route } from "./Routes/Route"
import TopBar from "./components/TopBar"
import MainHead from "./components/MainHead"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <div className=" text-gray-600 border-b">
      <TopBar/>
   </div>
    <MainHead/>
    <RouterProvider router={route}/>
    <Footer/>
    </div>
  )
}

export default App;

