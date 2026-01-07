
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  colors: { name: string; hex: string; imageUrl: string }[];
  sizes: string[];
  description: string;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
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
