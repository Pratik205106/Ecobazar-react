export interface NavItem {
  id: number; // Added id for navigation items
  name: string;
  path: string;
}

export interface CategoryData {
  id: number; // Added id for category items
  title: string;
  image: string;
  featured?: boolean;
}

export type CategoriesData = CategoryData[];

export interface PopularProduct {
  id: number; // Added id for popular products
  title: string;
  image: string;
  rate: string;
  fixRate?: string;
  star?: number;
}

export type PopularProducts = PopularProduct[];

export interface BannerData {
  id: number; // Added id for banners
  title: string;
  subtitle?: string;
  countDown?: boolean;
  price?: string;
  discount?: string;
  buttonText: string;
  image: string;
}

export type BannersData = BannerData[];

export interface DiscountsData {
  id: number; // Added id for discounts
  title: string;
  image: string;
  discount?: string;
  note: string;
}

export type DiscountData = DiscountsData[];

export interface LatestNewsData {
  id: number; // Added id for latest news
  title: string;
  image: string;
  date: {
    day: number;
    month: string;
  };
  category: string;
  commentCount: string;
}

export type LatestNews = LatestNewsData[];

export interface ClientInfoData {
  id: number; // Added id for client info
  title: string;
  image: string;
  clientName: string;
}

export type ClientInfo = ClientInfoData[];

export interface companyLogo {
  id: number; // Added id for company logo
  image: string;
}

export type companyLogoImg = companyLogo[];

export interface InstaPostData {
  id: number; // Added id for Insta post data
  image: string;
}

export type InstaPost = InstaPostData[];

export interface SocialMedia {
  id: number; // Added id for social media items
  image: string;
}

export type SocialMediaData = SocialMedia[];

export interface ProductType {
  id: number; // Added id for product type
  title: string;
  image: string;
  rate: string;
  fixRate?: string;
  star?: number;
  badge?: string; // ✅ Optional
}

export interface BillingInfo {
  firstName: string;
  lastName: string;
  companyName?: string;
  streetAddress: string;
  country: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  orderNotes?: string;
  shipToDifferentAddress?: boolean;
}

export interface CartItem {
  id: number; // Added id for cart items
  name: string;
  price: number;
  quantity: number;
  image: string;
}
