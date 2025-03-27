export interface NavItem{
    name: string;
    path: string;
  };

  export interface CategoryData {
    title:string;
    image:string;
    featured?: boolean
  };

  export type CategoriesData = CategoryData[];

  export interface PopularProduct {
title:string;
image:string;
number:string;
num?:string;
  };

  export type PopularProducts = PopularProduct[];

  export interface BannerData {
    title:string;
    subtitle?:string;
    countDown? :boolean;
    price?:string;
    discount?:string;
    buttonText:string;
    image:string;
  };

  export type BannersData = BannerData[];