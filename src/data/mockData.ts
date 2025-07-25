import { Product, Coupon, User } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    weight: 0.8,
    value: 95,
    stock: 25,
    category: "Electronics",
    image: "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 299.99,
    weight: 0.3,
    value: 88,
    stock: 15,
    category: "Electronics",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Advanced fitness tracking with heart rate monitoring"
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 149.99,
    weight: 12.0,
    value: 75,
    stock: 8,
    category: "Furniture",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Comfortable office chair with lumbar support"
  },
  {
    id: 4,
    name: "Wireless Bluetooth Speaker",
    price: 79.99,
    weight: 1.2,
    value: 70,
    stock: 30,
    category: "Electronics",
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Portable speaker with excellent sound quality"
  },
  {
    id: 5,
    name: "Premium Coffee Maker",
    price: 129.99,
    weight: 3.5,
    value: 82,
    stock: 12,
    category: "Kitchen",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Professional-grade coffee maker with programmable settings"
  },
  {
    id: 6,
    name: "Gaming Mechanical Keyboard",
    price: 159.99,
    weight: 1.8,
    value: 85,
    stock: 20,
    category: "Electronics",
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "RGB mechanical keyboard with premium switches"
  },
  {
    id: 7,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    weight: 0.5,
    value: 60,
    stock: 50,
    category: "Lifestyle",
    image: "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Insulated water bottle that keeps drinks cold for 24 hours"
  },
  {
    id: 8,
    name: "Wireless Phone Charger",
    price: 39.99,
    weight: 0.3,
    value: 65,
    stock: 35,
    category: "Electronics",
    image: "https://images.pexels.com/photos/4543967/pexels-photo-4543967.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Fast wireless charging pad compatible with all Qi devices"
  }
];

export const mockCoupons: Coupon[] = [
  {
    id: 1,
    code: "SAVE20",
    minCartValue: 100,
    discountPercent: 20,
    maxDiscount: 50,
    description: "20% off on orders over $100"
  },
  {
    id: 2,
    code: "MEGA30",
    minCartValue: 200,
    discountPercent: 30,
    maxDiscount: 80,
    description: "30% off on orders over $200"
  },
  {
    id: 3,
    code: "FLAT15",
    minCartValue: 75,
    discountPercent: 15,
    maxDiscount: 25,
    description: "15% off on orders over $75"
  },
  {
    id: 4,
    code: "SUPER40",
    minCartValue: 300,
    discountPercent: 40,
    maxDiscount: 120,
    description: "40% off on orders over $300"
  },
  {
    id: 5,
    code: "WELCOME10",
    minCartValue: 50,
    discountPercent: 10,
    maxDiscount: 15,
    description: "10% off on orders over $50"
  }
];

export const mockUser: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  role: "user"
};