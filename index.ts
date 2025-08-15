export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  specifications: {
    [key: string]: string;
  };
  sizes?: string[];
  colors?: string[];
  description: string;
  features: string[];
  returnPolicy: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}
