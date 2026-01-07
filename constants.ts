
import { Product } from './types';

export const CATEGORIES = ['All', 'Mens', 'Womens', 'Essentials', 'Sale'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Heavyweight Signature Hoodie',
    brand: 'MyEcom ORIGINALS',
    price: 89,
    originalPrice: 120,
    category: 'Essentials',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600&h=800',
      'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=600&h=800'
    ],
    colors: [
      { name: 'Oatmeal', hex: '#EAE0D5', imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600&h=800' },
      { name: 'Pitch Black', hex: '#000000', imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&q=80&w=600&h=800' },
      { name: 'Forest Green', hex: '#2D4B41', imageUrl: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?auto=format&fit=crop&q=80&w=600&h=800' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'A premium heavyweight hoodie featuring dropped shoulders and a double-lined hood for maximum comfort.',
    rating: 4.8,
    reviewsCount: 1240,
    isNew: true
  },
  {
    id: '2',
    name: 'Tailored Linen Blazer',
    brand: 'MyEcom LUXE',
    price: 149,
    category: 'Womens',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600&h=800',
      'https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?auto=format&fit=crop&q=80&w=600&h=800'
    ],
    colors: [
      { name: 'Ivory', hex: '#FFFFF0', imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600&h=800' },
      { name: 'Midnight', hex: '#191970', imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600&h=800' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Perfectly structured linen blazer for a smart-casual summer look. Breathable and chic.',
    rating: 4.5,
    reviewsCount: 85,
  },
  {
    id: '3',
    name: 'Vintage Wash Denim Jacket',
    brand: 'MyEcom RETRO',
    price: 110,
    originalPrice: 150,
    category: 'Mens',
    images: [
      'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80&w=600&h=800'
    ],
    colors: [
      { name: 'Classic Blue', hex: '#4682B4', imageUrl: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80&w=600&h=800' },
      { name: 'Bleached Grey', hex: '#D3D3D3', imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600&h=800' }
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'Iconic denim jacket with a vintage wash effect. Durable denim crafted for longevity.',
    rating: 4.9,
    reviewsCount: 450,
  },
  {
    id: '4',
    name: 'Silk Slip Dress',
    brand: 'MyEcom LUXE',
    price: 195,
    category: 'Womens',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600&h=800'
    ],
    colors: [
      { name: 'Champagne', hex: '#F7E7CE', imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600&h=800' },
      { name: 'Emerald', hex: '#50C878', imageUrl: 'https://images.unsplash.com/photo-1618932260643-eee4a3f7d745?auto=format&fit=crop&q=80&w=600&h=800' }
    ],
    sizes: ['XS', 'S', 'M'],
    description: 'Elegantly flowing 100% mulberry silk slip dress. A timeless piece for any evening.',
    rating: 4.7,
    reviewsCount: 230,
    isNew: true
  },
  {
    id: '5',
    name: 'Straight Leg Raw Jeans',
    brand: 'MyEcom DENIM',
    price: 75,
    category: 'Womens',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600&h=800'
    ],
    colors: [
      { name: 'Light Blue', hex: '#ADD8E6', imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600&h=800' },
      { name: 'Black Denim', hex: '#2C2C2C', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600&h=800' }
    ],
    sizes: ['24', '26', '28', '30', '32'],
    description: 'High-waisted straight leg jeans with an edgy raw hem detail.',
    rating: 4.3,
    reviewsCount: 890,
  },
  {
    id: '6',
    name: 'Classic Oxford Shirt',
    brand: 'MyEcom ORIGINALS',
    price: 65,
    category: 'Mens',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87034a264c6?auto=format&fit=crop&q=80&w=600&h=800'
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF', imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87034a264c6?auto=format&fit=crop&q=80&w=600&h=800' },
      { name: 'Light Pink', hex: '#FFB6C1', imageUrl: 'https://images.unsplash.com/photo-1620012253295-c05717270349?auto=format&fit=crop&q=80&w=600&h=800' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Crisp cotton oxford shirt with a standard collar. Essential for every wardrobe.',
    rating: 4.6,
    reviewsCount: 560,
  }
];
