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
  { name: "Home", path: "/" },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Pages",
    path: "/page",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export const categoryData: CategoriesData = [
  {
    title: "Fresh Fruit",
    image: STATICS_IMAGE.mixFruits,
  },
  {
    title: "Fresh Vegetables",
    featured: true,
    image: STATICS_IMAGE.freshVeg,
  },
  {
    title: "Meat & Fish",
    image: STATICS_IMAGE.nonVeg,
  },
  {
    title: "Snacks",
    image: STATICS_IMAGE.snacks,
  },
  {
    title: "Beverages",
    image: STATICS_IMAGE.beverages,
  },
  {
    title: "Beauty & Health",
    image: STATICS_IMAGE.beautyArts,
  },
  {
    title: "Bread & Bakery",
    image: STATICS_IMAGE.breadBakery,
  },
  {
    title: "Baking Needs",
    image: STATICS_IMAGE.bakingNeeds,
  },
  {
    title: "Cooking",
    image: STATICS_IMAGE.cooking,
  },
  {
    title: "Diabetic Food",
    image: STATICS_IMAGE.diabeticFood,
  },
  {
    title: "Dish Detergents",
    image: STATICS_IMAGE.dishDetergents,
  },
  {
    title: "Oil",
    image: STATICS_IMAGE.oil,
  },
];

export const PopularProduct: PopularProducts = [
  {
    title: "Green Apple",
    image: PRODUCTS_IMAGE.greenApple,
    rate: "$14.99",
    fixRate: "$20.99",
    star: 4.5,
  },
  {
    title: "Fresh Indian Malta",
    image: PRODUCTS_IMAGE.freshMalta,
    rate: "$20.00",
    star: 5,
  },
  {
    title: "Chinese cabbage",
    image: PRODUCTS_IMAGE.chineseCabbage,
    rate: "$12.00",
    star: 3.5,
  },
  {
    title: "Green Lettuce",
    image: PRODUCTS_IMAGE.greenLettuce,
    rate: "$9.00",
    star: 4,
  },
  {
    title: "Eggplant",
    image: PRODUCTS_IMAGE.eggPlant,
    rate: "$34.00",
    star: 4.8,
  },
  {
    title: "Big Potatoes",
    image: PRODUCTS_IMAGE.potatoes,
    rate: "$20.00",
    star: 3.9,
  },
  {
    title: "Corn",
    image: PRODUCTS_IMAGE.corn,
    rate: "$20.00",
    star: 4.2,
  },
  {
    title: "Fresh Cauliflower",
    image: PRODUCTS_IMAGE.cauliflower,
    rate: "$12.00",
    star: 3.8,
  },
  {
    title: "Green Capsicum",
    image: PRODUCTS_IMAGE.capsicum,
    rate: "$9.00",
    fixRate: "20.99",
    star: 4.3,
  },
  {
    title: "Green Chili",
    image: PRODUCTS_IMAGE.chili,
    rate: "$34.00",
    star: 4.7,
  },
];

export const BannerData: BannersData = [
  {
    title: "Sale of the Month",
    subtitle: "Best Deals",
    countDown: true,
    buttonText: "Shop Now",
    image: BANNER_IMAGE.saleOfMonth,
  },
  {
    title: "Low-Fat Meat",
    subtitle: "85% Fat Free",
    price: "$79.99",
    buttonText: "Shop Now",
    image: BANNER_IMAGE.lowFatMeat,
  },
  {
    title: "100% Fresh Fruit",
    subtitle: "Summer Sale",
    discount: "64% OFF",
    buttonText: "Shop Now",
    image: BANNER_IMAGE.freshFruits,
  },
];

export const DiscountData: DiscountsData = {
  title: "SUMMER SALE",
  discount: "37%",
  image: DISCOUNT_IMAGE.mixVeg,
  note: "Free on all your order, Free Shipping and  30 days money-back guarantee",
};

export const LatestNews: LatestNewsData[] = [
  {
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    image: LATEST_IMAGE.orangeSlice,
    date: {
      day: 18,
      month: "Nov",
    },
    category: "Food",
    commentCount: "65 Comments",
  },
  {
    title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    image: LATEST_IMAGE.eggBoil,
    date: {
      day: 18,
      month: "Nov",
    },
    category: "Food",
    commentCount: "65 Comments",
  },

  {
    title: "Maecenas blandit risus elementum mauris malesuada.",
    image: LATEST_IMAGE.maecenas,
    date: {
      day: 18,
      month: "Nov",
    },
    category: "Food",
    commentCount: "65 Comments",
  },
];
export default LatestNews;

export const ClientInfo: ClientInfoData[] = [
  {
    title:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    image: CLIENT_IMAGE.robertFox,
    clientName: "Robert Fox",
  },
  {
    title:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    image: CLIENT_IMAGE.dianneRussell,
    clientName: "Dianne Russell",
  },
  {
    title:
      "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    image: CLIENT_IMAGE.eleanorPena,
    clientName: "Eleanor Pena",
  },
];
export type ClientInfo = ClientInfoData[];

export const companyLogoImg: companyLogo[] = [
  {
    image: LOGO_IMAGE.stepsImg,
  },
  {
    image: LOGO_IMAGE.mangoImg,
  },
  {
    image: LOGO_IMAGE.foodNetwork,
  },
  {
    image: LOGO_IMAGE.foodImg,
  },
  {
    image: LOGO_IMAGE.bookOFFLogo,
  },
  {
    image: LOGO_IMAGE.gSeries,
  },
];
export type companyLogoImg = companyLogo[];

export const InstaPost: InstaPostData[] = [
  {
    image: POST_IMAGE.tomatoImg,
  },
  {
    image: POST_IMAGE.instaLeaf,
  },
  {
    image: POST_IMAGE.instaPost,
  },
  {
    image: POST_IMAGE.instaChili,
  },
  {
    image: POST_IMAGE.instaGreenLeaf,
  },
  {
    image: POST_IMAGE.instaOrange,
  },
];
export type InstaPost = InstaPostData[];

export const SocialMediaData: SocialMedia[] = [
  {
    image: ICON_IMAGE.facebookIcon,
  },
  {
    image: ICON_IMAGE.twitterIcon,
  },
  {
    image: ICON_IMAGE.pinterestIcon,
  },
  {
    image: ICON_IMAGE.instagramIcon,
  },
];
export type SocialMediaData = SocialMedia[];

export const extraProducts: ProductType[] = [
  {
    title: "Red Chili",
    rate: "$14.99",
    image: PRODUCTS_IMAGE.redChili,
    star: 4,
  },
  {
    title: "Green Cucumber",
    rate: "$14.99",
    fixRate: "$20.99",
    image: PRODUCTS_IMAGE.greenCucumber,
    star: 4,
  },
  {
    title: "Ladies Finger",
    rate: "$14.99",
    image: PRODUCTS_IMAGE.ladiesFinger,
    star: 4,
  },
  {
    title: "Red Tomato",
    rate: "$14.99",
    image: PRODUCTS_IMAGE.redTomatoes,
    star: 4,
  },
  {
    title: "Fresh Mango",
    rate: "$14.99",
    image: PRODUCTS_IMAGE.mangoes,
    star: 4,
  },
  {
    title: "Green Capsicum",
    rate: "$14.99",
    image: PRODUCTS_IMAGE.redCapsicum,
    star: 4,
  },
];
