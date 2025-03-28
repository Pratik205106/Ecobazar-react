import Banner from "../components/Banner";
import Category from "../components/Category";
import DiscountBanner from "../components/DiscountBanner";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import FeatureProduct from "../components/FeatureProduct";
import LatestNews from "../components/LatestNews";
import Products from "../components/Products";





const Home = () => {
  return (
    <>
    <HeroSection/>
<Features/> 
<Category/>
<Products/>
<Banner/>
<DiscountBanner/>
<FeatureProduct/>
<LatestNews/>
    </>
  );
};

export default Home;
