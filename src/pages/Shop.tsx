
import Filter from "../ShopComponents/Filter"
import ShopDiscountBanner from "../ShopComponents/ShopDiscountBanner"
import ShopProducts from "../ShopComponents/ShopProducts"




const Shop = () => {
 
  return (
   <>
  <ShopDiscountBanner/>
  <div className="flex flex-col-2 ">
  <Filter/>
  <ShopProducts/>
  </div>
   </>
  )
}

export default Shop;