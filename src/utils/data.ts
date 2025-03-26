import { CategoriesData, NavItem, PopularProducts } from "../../types/types";
import { PRODUCTS_IMAGE, STATICS_IMAGE } from "./staticImg";

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
image:PRODUCTS_IMAGE.greenApple
 },
 {
  title:"Fresh Indian Malta",
  image:PRODUCTS_IMAGE.freshMalta
 },
 {
  title:"Chinese cabbage",
  image:PRODUCTS_IMAGE.chineseCabbage
 },
 {
  title:"Green Lettuce",
  image:PRODUCTS_IMAGE.greenLettuce
 },
 {
  title:"Eggplant",
  image:PRODUCTS_IMAGE.eggPlant
 },
 {
  title:"Big Potatoes",
  image:PRODUCTS_IMAGE.potatoes
 },
 {
  title:"Corn",
  image:PRODUCTS_IMAGE.corn
 },
 {
  title:"Fresh Cauliflower",
  image:PRODUCTS_IMAGE.cauliflower
 },
 {
  title:"Green Capsicum",
  image:PRODUCTS_IMAGE.capsicum
 },
 {
  title:"Green Chili",
  image:PRODUCTS_IMAGE.chili
 },
]; 