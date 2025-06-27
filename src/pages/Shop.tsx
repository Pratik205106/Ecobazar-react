// import Filter from "../ShopComponents/Filter";
// import OrderBanner from "../ShopComponents/OrderBanner";
// import PopularTagFilter from "../ShopComponents/PopularTagFilter";
// import PriceFilter from "../ShopComponents/PriceFilter";
// import RatingFilter from "../ShopComponents/RatingFilter";
// import ShopDiscountBanner from "../ShopComponents/ShopDiscountBanner";
// import ShopProducts from "../ShopComponents/ShopProducts";

// const Shop = () => {
//   return (
//     <>
//       <ShopDiscountBanner />
//       <div className="flex max-w-[82.5rem] mx-auto gap-32 mt-10">
//         {/* Sidebar Filter */}
//         <div className="w-[312px] h-[1799px]">
//           <Filter />
//           <PriceFilter/>
//           <RatingFilter/>
//           <PopularTagFilter/>
//           <OrderBanner/>
//         </div>

//         {/* Main Product Section */}
//         <div className="flex-1 flex justify-center">
//           <ShopProducts />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Shop;


import Filter from "../ShopComponents/Filter";
import OrderBanner from "../ShopComponents/OrderBanner";
import PopularTagFilter from "../ShopComponents/PopularTagFilter";
import PriceFilter from "../ShopComponents/PriceFilter";
import RatingFilter from "../ShopComponents/RatingFilter";
import ShopDiscountBanner from "../ShopComponents/ShopDiscountBanner";
import ShopProducts from "../ShopComponents/ShopProducts";
import CartDrawer from "../ui/CartDrawer";

const Shop = () => {
  return (
    <>
      <ShopDiscountBanner />
      <div className="flex max-w-[82.5rem] mx-auto gap-32 mt-10">
        {/* Sidebar Filter */}
        <div className="w-[312px] h-auto">
          <Filter />
          <PriceFilter />
          <RatingFilter />
          <PopularTagFilter />
          <OrderBanner />
          <CartDrawer />  {/* Your cart drawer */}
        </div>

        {/* Main Product Section */}
        <div className="flex-1 flex justify-center relative">
          <ShopProducts />
        </div>
      </div>
    </>
  );
};

export default Shop;
