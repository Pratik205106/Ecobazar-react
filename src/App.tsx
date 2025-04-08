import { RouterProvider } from "react-router"
import route from "./Routes/Route.tsx";


const App = () => {
  return (
    <div>
    <RouterProvider router={route}/>
    </div>
  )
}

export default App;

