import { useLocation } from "react-router"
import Filter from "../ShopComponents/Filter"
import ShopDiscountBanner from "../ShopComponents/ShopDiscountBanner"
import ShopProducts from "../ShopComponents/ShopProducts"




const Shop = () => {
  const path= useLocation()
  console.log(path.pathname)
  return (
   <>
  <ShopDiscountBanner/>
  <Filter/>
  <ShopProducts/>
   </>
  )
}

export default Shop