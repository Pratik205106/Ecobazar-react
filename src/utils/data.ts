import {
  BannersData,
  CategoriesData,
  ClientInfoData,
  companyLogo,
  DiscountsData,
  InstaPostData,
  LatestNewsData,
  NavItem,
  PopularProducts,
  ProductType,
  SocialMedia,
} from "../../types/types";

import {
  BANNER_IMAGE,
  CLIENT_IMAGE,
  DISCOUNT_IMAGE,
  LATEST_IMAGE,
  LOGO_IMAGE,
  ICON_IMAGE,
  POST_IMAGE,
  PRODUCTS_IMAGE,
  STATICS_IMAGE,
} from "./staticImg";

export const navItems: NavItem[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Shop", path: "/shop" },
  { id: 3, name: "Pages", path: "/page" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "About Us", path: "/about" },
  { id: 6, name: "Contact Us", path: "/contact" },
];

export const categoryData: CategoriesData = [
  { id: 1, title: "Fresh Fruit", image: STATICS_IMAGE.mixFruits },
  { id: 2, title: "Fresh Vegetables", featured: true, image: STATICS_IMAGE.freshVeg },
  { id: 3, title: "Meat & Fish", image: STATICS_IMAGE.nonVeg },
  { id: 4, title: "Snacks", image: STATICS_IMAGE.snacks },
  { id: 5, title: "Beverages", image: STATICS_IMAGE.beverages },
  { id: 6, title: "Beauty & Health", image: STATICS_IMAGE.beautyArts },
  { id: 7, title: "Bread & Bakery", image: STATICS_IMAGE.breadBakery },
  { id: 8, title: "Baking Needs", image: STATICS_IMAGE.bakingNeeds },
  { id: 9, title: "Cooking", image: STATICS_IMAGE.cooking },
  { id: 10, title: "Diabetic Food", image: STATICS_IMAGE.diabeticFood },
  { id: 11, title: "Dish Detergents", image: STATICS_IMAGE.dishDetergents },
  { id: 12, title: "Oil", image: STATICS_IMAGE.oil },
];

export const PopularProduct: PopularProducts = [
  { id: 1, title: "Green Apple", image: PRODUCTS_IMAGE.greenApple, rate: "$14.99", fixRate: "$20.99", star: 4.5 },
  { id: 2, title: "Fresh Indian Malta", image: PRODUCTS_IMAGE.freshMalta, rate: "$20.00", star: 5 },
  { id: 3, title: "Chinese cabbage", image: PRODUCTS_IMAGE.chineseCabbage, rate: "$12.00", star: 3.5 },
  { id: 4, title: "Green Lettuce", image: PRODUCTS_IMAGE.greenLettuce, rate: "$9.00", star: 4 },
  { id: 5, title: "Eggplant", image: PRODUCTS_IMAGE.eggPlant, rate: "$34.00", star: 4.8 },
  { id: 6, title: "Big Potatoes", image: PRODUCTS_IMAGE.potatoes, rate: "$20.00", star: 3.9 },
  { id: 7, title: "Corn", image: PRODUCTS_IMAGE.corn, rate: "$20.00", star: 4.2 },
  { id: 8, title: "Fresh Cauliflower", image: PRODUCTS_IMAGE.cauliflower, rate: "$12.00", star: 3.8 },
  { id: 9, title: "Green Capsicum", image: PRODUCTS_IMAGE.capsicum, rate: "$9.00", fixRate: "$20.99", star: 4.3 },
  { id: 10, title: "Green Chili", image: PRODUCTS_IMAGE.chili, rate: "$34.00", star: 4.7 },
];

export const BannerData: BannersData = [
  { id: 1, title: "Sale of the Month", subtitle: "Best Deals", countDown: true, buttonText: "Shop Now", image: BANNER_IMAGE.saleOfMonth },
  { id: 2, title: "Low-Fat Meat", subtitle: "85% Fat Free", price: "$79.99", buttonText: "Shop Now", image: BANNER_IMAGE.lowFatMeat },
  { id: 3, title: "100% Fresh Fruit", subtitle: "Summer Sale", discount: "64% OFF", buttonText: "Shop Now", image: BANNER_IMAGE.freshFruits },
];

export const DiscountData: DiscountsData = {
  id: 1,
  title: "SUMMER SALE",
  discount: "37%",
  image: DISCOUNT_IMAGE.mixVeg,
  note: "Free on all your order, Free Shipping and  30 days money-back guarantee",
};

export const LatestNews: LatestNewsData[] = [
  {
    id: 1,
    title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    image: LATEST_IMAGE.orangeSlice,
    date: { day: 18, month: "Nov" },
    category: "Food",
    commentCount: "65 Comments",
  },
  {
    id: 2,
    title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    image: LATEST_IMAGE.eggBoil,
    date: { day: 18, month: "Nov" },
    category: "Food",
    commentCount: "65 Comments",
  },
  {
    id: 3,
    title: "Maecenas blandit risus elementum mauris malesuada.",
    image: LATEST_IMAGE.maecenas,
    date: { day: 18, month: "Nov" },
    category: "Food",
    commentCount: "65 Comments",
  },
];

export const ClientInfo: ClientInfoData[] = [
  {
    id: 1,
    title: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus...",
    image: CLIENT_IMAGE.robertFox,
    clientName: "Robert Fox",
  },
  {
    id: 2,
    title: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus...",
    image: CLIENT_IMAGE.dianneRussell,
    clientName: "Dianne Russell",
  },
  {
    id: 3,
    title: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus...",
    image: CLIENT_IMAGE.eleanorPena,
    clientName: "Eleanor Pena",
  },
];

export const companyLogoImg: companyLogo[] = [
  { id: 1, image: LOGO_IMAGE.stepsImg },
  { id: 2, image: LOGO_IMAGE.mangoImg },
  { id: 3, image: LOGO_IMAGE.foodNetwork },
  { id: 4, image: LOGO_IMAGE.foodImg },
  { id: 5, image: LOGO_IMAGE.bookOFFLogo },
  { id: 6, image: LOGO_IMAGE.gSeries },
];

export const InstaPost: InstaPostData[] = [
  { id: 1, image: POST_IMAGE.tomatoImg },
  { id: 2, image: POST_IMAGE.instaLeaf },
  { id: 3, image: POST_IMAGE.instaPost },
  { id: 4, image: POST_IMAGE.instaChili },
  { id: 5, image: POST_IMAGE.instaGreenLeaf },
  { id: 6, image: POST_IMAGE.instaOrange },
];

export const SocialMediaData: SocialMedia[] = [
  { id: 1, image: ICON_IMAGE.facebookIcon },
  { id: 2, image: ICON_IMAGE.twitterIcon },
  { id: 3, image: ICON_IMAGE.pinterestIcon },
  { id: 4, image: ICON_IMAGE.instagramIcon },
];

export const extraProducts: ProductType[] = [
  { id: 1, title: "Red Chili", rate: "$14.99", image: PRODUCTS_IMAGE.redChili, star: 4 },
  { id: 2, title: "Green Cucumber", rate: "$14.99", fixRate: "$20.99", image: PRODUCTS_IMAGE.greenCucumber, star: 4 },
  { id: 3, title: "Ladies Finger", rate: "$14.99", image: PRODUCTS_IMAGE.ladiesFinger, star: 4 },
  { id: 4, title: "Red Tomato", rate: "$14.99", image: PRODUCTS_IMAGE.redTomatoes, star: 4 },
  { id: 5, title: "Fresh Mango", rate: "$14.99", image: PRODUCTS_IMAGE.mangoes, star: 4 },
  { id: 6, title: "Green Capsicum", rate: "$14.99", image: PRODUCTS_IMAGE.redCapsicum, star: 4 },
];

export const initialCart = [
  { id: 1, name: "Green Capsicum", price: 14.0, quantity: 5, image: PRODUCTS_IMAGE.capsicum },
  { id: 2, name: "Red Capsicum", price: 14.0, quantity: 5, image: PRODUCTS_IMAGE.redCapsicum },
];
