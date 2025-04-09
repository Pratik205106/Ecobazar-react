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
rate:string;
fixRate?:string;
star?: string | number;
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


  export interface DiscountsData {
    title:string;
    image:string;
    discount?:string;
    note:string;
  };
export type DiscountData = DiscountsData[];


  export interface LatestNewsData{
    title:string;
    image:string;
    date:{
      day: number;
      month: string;
    },
    category:string;
    commentCount:string;
  };
export type LatestNews= LatestNewsData[];

export interface ClientInfoData{
    title:string;
    image:string;
    clientName:string;
  };
export type ClientInfo = ClientInfoData[];
  
export interface companyLogo {
  image:string;
};
export type companyLogoImg = companyLogo[];

export interface InstaPostData{
  image:string;
};
export type InstaPost=InstaPostData[];

export interface SocialMedia{
  image:string;
};
export type SocialMediaData=SocialMedia[];

export interface ProductType {
  title: string;
  rate: string;
  fixRate?:string;
  image: string;
  star?: string | number;
  badge?: string;
}
