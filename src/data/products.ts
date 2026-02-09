export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  badge?: string;
  description: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "audio",
    name: "Audio",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    count: 3,
  },
  {
    id: "watches",
    name: "Watches",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=400&fit=crop",
    count: 2,
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=400&fit=crop",
    count: 4,
  },
  {
    id: "footwear",
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop",
    count: 3,
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Pro Wireless Headphones",
    price: 299,
    originalPrice: 399,
    category: "audio",
    rating: 4.8,
    reviews: 2847,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop",
    ],
    badge: "Best Seller",
    description: "Premium noise-cancelling wireless headphones with spatial audio and 40-hour battery life. Experience studio-quality sound wherever you go.",
    inStock: true,
  },
  {
    id: 2,
    name: "Minimal Leather Watch",
    price: 189,
    originalPrice: 249,
    category: "watches",
    rating: 4.7,
    reviews: 1523,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop",
    ],
    description: "Timeless Swiss-inspired design with genuine Italian leather strap. Water-resistant to 50m with sapphire crystal glass.",
    inStock: true,
  },
  {
    id: 3,
    name: "Classic Leather Backpack",
    price: 149,
    category: "accessories",
    rating: 4.6,
    reviews: 982,
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=800&h=800&fit=crop",
    ],
    description: "Handcrafted full-grain leather backpack with padded laptop compartment. Perfect for work or weekend adventures.",
    inStock: true,
  },
  {
    id: 4,
    name: "Urban Runner Sneakers",
    price: 179,
    originalPrice: 229,
    category: "footwear",
    rating: 4.5,
    reviews: 2134,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556048219-bb6978360b84?w=800&h=800&fit=crop",
    ],
    badge: "New",
    description: "Lightweight performance sneakers with responsive cushioning. Engineered mesh upper for breathability.",
    inStock: true,
  },
  {
    id: 5,
    name: "Studio Monitor Earbuds",
    price: 199,
    category: "audio",
    rating: 4.9,
    reviews: 3456,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=800&h=800&fit=crop",
    ],
    badge: "Best Seller",
    description: "True wireless earbuds with active noise cancellation and transparency mode. 8-hour battery life.",
    inStock: true,
  },
  {
    id: 6,
    name: "Titanium Smart Watch",
    price: 449,
    originalPrice: 549,
    category: "watches",
    rating: 4.8,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=800&h=800&fit=crop",
    ],
    badge: "Premium",
    description: "Aerospace-grade titanium smartwatch with always-on AMOLED display. Track fitness, sleep, and health metrics.",
    inStock: true,
  },
  {
    id: 7,
    name: "Premium Sunglasses",
    price: 129,
    originalPrice: 169,
    category: "accessories",
    rating: 4.4,
    reviews: 756,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop",
    ],
    description: "Polarized UV400 lenses with lightweight acetate frames. Italian craftsmanship meets modern design.",
    inStock: true,
  },
  {
    id: 8,
    name: "Trail Hiker Boots",
    price: 219,
    category: "footwear",
    rating: 4.7,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&h=800&fit=crop",
    ],
    description: "Waterproof full-grain leather boots with Vibram sole. Built for any terrain, any weather.",
    inStock: true,
  },
  {
    id: 9,
    name: "Portable BT Speaker",
    price: 89,
    originalPrice: 119,
    category: "audio",
    rating: 4.3,
    reviews: 2198,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop",
    ],
    description: "360° surround sound in a compact, waterproof design. 20-hour battery life for all-day listening.",
    inStock: true,
  },
  {
    id: 10,
    name: "Canvas Tote Bag",
    price: 79,
    category: "accessories",
    rating: 4.5,
    reviews: 643,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop",
    ],
    badge: "New",
    description: "Organic cotton canvas with leather accents. Spacious interior with multiple pockets.",
    inStock: true,
  },
  {
    id: 11,
    name: "Retro Running Shoes",
    price: 159,
    originalPrice: 199,
    category: "footwear",
    rating: 4.6,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop",
    ],
    description: "Vintage-inspired running shoes with modern comfort technology. Suede and nylon upper.",
    inStock: true,
  },
  {
    id: 12,
    name: "Leather Card Wallet",
    price: 59,
    category: "accessories",
    rating: 4.8,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop",
    ],
    description: "Slim profile card wallet in premium vegetable-tanned leather. Holds up to 8 cards with RFID protection.",
    inStock: true,
  },
];
