import { BannersData, CategoriesData, NavItem, PopularProducts } from "../../types/types";
import { BANNER_IMAGE, PRODUCTS_IMAGE, STATICS_IMAGE } from "./staticImg";

export const navItems: NavItem[] = [
{name: "Home", 
  path: "/home"
},
{
  name: "Shop",
  path: "/shop"
},
{
  name: "Pages",
  path: "/page"
},
{
  name: "Blog",
  path: "/blog"
},
{
  name: "About Us",
  path: "/about"
},
{
  name: "Contact Us",
  path: "/contact"
},
];

export const categoryData:CategoriesData = [
  {
    title:"Fresh Fruit",
    image:STATICS_IMAGE.mixFruits
  },
  {
    title:"Fresh Vegetables",
    featured:true,
    image:STATICS_IMAGE.freshVeg
  },
  {
    title:"Meat & Fish",
    image:STATICS_IMAGE.nonVeg
  },
  {
    title:"Snacks",
    image:STATICS_IMAGE.snacks
  },
  {
    title:"Beverages",
    image:STATICS_IMAGE.beverages
  },
  {
    title:"Beauty & Health",
    image:STATICS_IMAGE.beautyArts
  },
  {
    title:"Bread & Bakery",
    image:STATICS_IMAGE.breadBakery
  },
  {
    title:"Baking Needs",
    image:STATICS_IMAGE.bakingNeeds
  },
  {
    title:"Cooking",
    image:STATICS_IMAGE.cooking
  },
  {
    title:"Diabetic Food",
    image:STATICS_IMAGE.diabeticFood
  },
  {
    title:"Dish Detergents",
    image:STATICS_IMAGE.dishDetergents
  },
  {
    title:"Oil",
    image:STATICS_IMAGE.oil
  },
];



 export const PopularProduct:PopularProducts = [
  {
title:"Green Apple",
image:PRODUCTS_IMAGE.greenApple,
number:"$14.99",
num:"$20.99",
 },
 {
  title:"Fresh Indian Malta",
  image:PRODUCTS_IMAGE.freshMalta,
  number:"$20.00",
 },
 {
  title:"Chinese cabbage",
  image:PRODUCTS_IMAGE.chineseCabbage,
  number:"$12.00",
 },
 {
  title:"Green Lettuce",
  image:PRODUCTS_IMAGE.greenLettuce,
  number:"$9.00",
 },
 {
  title:"Eggplant",
  image:PRODUCTS_IMAGE.eggPlant,
  number:"$34.00",
 },
 {
  title:"Big Potatoes",
  image:PRODUCTS_IMAGE.potatoes,
  number:"$20.00",
 },
 {
  title:"Corn",
  image:PRODUCTS_IMAGE.corn,
  number:"$20.00",
 },
 {
  title:"Fresh Cauliflower",
  image:PRODUCTS_IMAGE.cauliflower,
  number:"$12.00",
 },
 {
  title:"Green Capsicum",
  image:PRODUCTS_IMAGE.capsicum,
  number:"$9.00",
  num:"20.99",
 },
 {
  title:"Green Chili",
  image:PRODUCTS_IMAGE.chili,
  number:"$34.00",
 },
]; 

export const BannerData:BannersData = [ 
{ 
  title:"Sale of the Month", 
  subtitle:"Best Deals",
  countDown:true,
  buttonText:"Shop Now",
  image:BANNER_IMAGE.saleOfMonth 
},
{
  title:"Low-Fat Meat",
  subtitle:"85% Fat Free",
  price:"$79.99",
  buttonText:"Shop Now",
  image:BANNER_IMAGE.lowFatMeat
},
{
  title:"100% Fresh Fruit",
  subtitle:"Summer Sale",
  discount:"64% OFF",
  buttonText:"Shop Now",
  image:BANNER_IMAGE.freshFruits
}
]; 