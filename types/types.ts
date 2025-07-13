export interface NavItem {
  id: number;
  name: string;
  path: string;
}

export interface CategoryData {
  id: number;
  title: string;
  image: string;
  featured?: boolean;
}

export type CategoriesData = CategoryData[];

// export interface ProductType {
//   id: number;
//   title: string;
//   name: string;
//   image: string;
//   rate: string;
//   fixRate?: string;
//   star?: number;
//   badge?: string;
//   price: number;
//   quantity: number;
//   images?: string[];
// }
export interface ProductType {
  id: number;
  name: string;
  image: string;
  images?: string[];
  title:string;
  price: number;
  rate: string;
  fixRate?: string;
  star?: number;
  reviewCount?: number;
  sku?: string;
  brandLogo?: string;
  BrandName: string;
  description?: string;
  category?: string;
  tags?: string[];
   quantity?: number;
}


// ✅ Now extends ProductType so it includes price, quantity, etc.
export interface PopularProduct extends ProductType {
  // Add extra fields if needed, or keep it empty if none
}

export type PopularProducts = PopularProduct[];

export interface BannerData {
  id: number;
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
  id: number;
  title: string;
  image: string;
  discount?: string;
  note: string;
}

export type DiscountData = DiscountsData[];

export interface LatestNewsData {
  id: number;
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
  id: number;
  title: string;
  image: string;
  clientName: string;
}

export type ClientInfo = ClientInfoData[];

export interface companyLogo {
  id: number;
  image: string;
}

export type companyLogoImg = companyLogo[];

export interface InstaPostData {
  id: number;
  image: string;
}

export type InstaPost = InstaPostData[];

export interface SocialMedia {
  id: number;
  image: string;
}

export type SocialMediaData = SocialMedia[];



export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  star?: number;
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
  phoneNumber: string;
  orderNotes?: string;
  shipToDifferentAddress?: boolean;

  // Shipping fields (optional)
  shippingFirstName?: string;
  shippingLastName?: string;
  shippingCompanyName?: string;
  shippingStreetAddress?: string;
  shippingCountry?: string;
  shippingState?: string;
  shippingZipCode?: string;
  shippingEmail?: string;
  shippingPhone?: string;
}



export interface CartTotalDisplayProps {
  subtotal: number;
  shippingCost: number;
  couponDiscount: number;
  total: number;
  cartItems: CartItem[];
  // onProceedToCheckout: () => void; // <-- Add this line
}





