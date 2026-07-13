export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
}

export interface Ingredient {
  id: string;
  name: string;
}

export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  ingredients: Ingredient[];
  rating: number;
  reviews: number;
  calories: number;
  preparationTime: number;
  spicy: boolean;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  available: boolean;
  featured: boolean;
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: number;
  bio: string;
}

export interface Testimonial {
  id: string;
  customer: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface Reservation {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  notes?: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
  role: "customer" | "admin";
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "pending" | "confirmed" | "preparing" | "delivered";
  createdAt: string;
}
