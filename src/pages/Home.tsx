import Banner from "../components/Banner";
import Category from "../components/Category";
import DiscountBanner from "../components/DiscountBanner";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import FeatureProduct from "../components/FeatureProduct";
import LatestNews from "../components/LatestNews";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import CompanyLogo from "../components/CompanyLogo";
import InstaSec from "../components/InstaSec";
import Subscribe from "../components/Subscribe";
import HotDeals from "../components/HotDeals";








const Home = () => {
  return (
    <>
    <HeroSection/>
<Features/> 
<Category/>
<Products/>
<Banner/>
<HotDeals/>
<DiscountBanner/>
<FeatureProduct/>
<LatestNews/>
<Testimonials/>
<CompanyLogo/>
<InstaSec/>
<Subscribe/>
    </>
  );
};

export default Home;
