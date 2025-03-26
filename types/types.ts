export interface NavItem{
    name: string;
    path: string;
  };

  export interface CategoryData {
    title:string;
    image:string;
  };

  export type CategoriesData = CategoryData[];

  export interface PopularProduct {
title:string;
image:string;
  };

  export type PopularProducts = PopularProduct[];