import { RouterProvider } from "react-router"
import { route } from "./Routes/Route"
import Map from "./TopBar/Map"
import MainHead from "./MainHeader/MainHead"

const App = () => {
  return (
    <div>
      <div className=" text-gray-600 border-b">
      <Map/>
   </div>
    <MainHead/>
    <RouterProvider router={route}/>
    </div>
  )
}

export default App;

