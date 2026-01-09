
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  gender?: string;
  images: string[];
  colors: { name: string; hex: string; imageUrl: string }[];
  sizes: string[];
  description: string;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  inStock?: boolean;
}

export interface FilterOptions {
  categories: string[];
  subcategories: string[];
  brands: string[];
  priceRange: { min: number; max: number };
  sizes: string[];
  colors: string[];
  rating: number;
  inStock: boolean;
  discount: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

export interface User {
  name: string;
  email: string;
}
