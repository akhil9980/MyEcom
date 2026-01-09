import { Product } from "../types";

// Comprehensive Product Database - 60+ Items
export const PRODUCTS: Product[] = [
  // Women's Sweaters & Cardigans
  {
    id: "w001",
    name: "Cashmere Turtleneck Sweater",
    brand: "SNAPPBUY ESSENTIALS",
    price: 189,
    originalPrice: 249,
    category: "Women",
    subcategory: "Sweaters",
    gender: "Women",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
    ],
    colors: [
      {
        name: "Cream",
        hex: "#F5F5DC",
        imageUrl:
          "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
      },
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Luxuriously soft cashmere turtleneck sweater. Timeless silhouette, perfect for layering.",
    rating: 4.8,
    reviewsCount: 342,
    isNew: true,
    inStock: true,
  },
  {
    id: "w002",
    name: "Merino Wool Cardigan",
    brand: "SNAPPBUY ESSENTIALS",
    price: 159,
    originalPrice: 199,
    category: "Women",
    subcategory: "Sweaters",
    gender: "Women",
    images: [
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800",
    ],
    colors: [
      {
        name: "Beige",
        hex: "#D4C4B0",
        imageUrl:
          "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800",
      },
      {
        name: "Grey",
        hex: "#808080",
        imageUrl:
          "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Classic V-neck cardigan in soft merino wool. Essential wardrobe staple.",
    rating: 4.6,
    reviewsCount: 234,
    inStock: true,
  },
  {
    id: "w003",
    name: "Cashmere V-Neck Sweater",
    brand: "SNAPPBUY ESSENTIALS",
    price: 169,
    originalPrice: 219,
    category: "Women",
    subcategory: "Sweaters",
    gender: "Women",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
    ],
    colors: [
      {
        name: "Grey",
        hex: "#808080",
        imageUrl:
          "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
      },
      {
        name: "Camel",
        hex: "#C19A6B",
        imageUrl:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Ultra-soft cashmere V-neck in classic colors. Refined simplicity.",
    rating: 4.8,
    reviewsCount: 267,
    inStock: true,
  },

  // Women's Jackets & Coats
  {
    id: "w004",
    name: "Tailored Wool Coat",
    brand: "SNAPPBUY STUDIO",
    price: 599,
    originalPrice: 799,
    category: "Women",
    subcategory: "Jackets",
    gender: "Women",
    images: [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
    ],
    colors: [
      {
        name: "Camel",
        hex: "#C19A6B",
        imageUrl:
          "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800",
      },
      {
        name: "Navy",
        hex: "#001f3f",
        imageUrl:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
      },
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Premium Italian wool coat with a tailored fit. Classic double-breasted design.",
    rating: 4.9,
    reviewsCount: 156,
    isNew: false,
    inStock: true,
  },
  {
    id: "w005",
    name: "Leather Biker Jacket",
    brand: "SNAPPBUY STUDIO",
    price: 699,
    originalPrice: 899,
    category: "Women",
    subcategory: "Jackets",
    gender: "Women",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
      "https://images.unsplash.com/photo-1542327041-e8ad29e3c46d?w=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
      },
      {
        name: "Brown",
        hex: "#654321",
        imageUrl:
          "https://images.unsplash.com/photo-1542327041-e8ad29e3c46d?w=800",
      },
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Classic motorcycle jacket in premium lambskin leather. Timeless edge.",
    rating: 4.9,
    reviewsCount: 312,
    inStock: true,
  },
  {
    id: "w006",
    name: "Tailored Blazer",
    brand: "SNAPPBUY STUDIO",
    price: 349,
    category: "Women",
    subcategory: "Jackets",
    gender: "Women",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800",
      },
      {
        name: "Navy",
        hex: "#001f3f",
        imageUrl:
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Sharp single-breasted blazer with peak lapels. Power dressing perfected.",
    rating: 4.7,
    reviewsCount: 189,
    inStock: true,
  },

  // Women's Dresses & Skirts
  {
    id: "w007",
    name: "Silk Slip Dress",
    brand: "SNAPPBUY ATELIER",
    price: 299,
    category: "Women",
    subcategory: "Dresses",
    gender: "Women",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
    ],
    colors: [
      {
        name: "Champagne",
        hex: "#F7E7CE",
        imageUrl:
          "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
      },
      {
        name: "Emerald",
        hex: "#50C878",
        imageUrl:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
      },
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Pure silk charmeuse slip dress with adjustable straps. Effortlessly elegant.",
    rating: 4.7,
    reviewsCount: 289,
    isNew: true,
    inStock: true,
  },
  {
    id: "w008",
    name: "Pleated Midi Skirt",
    brand: "SNAPPBUY ATELIER",
    price: 179,
    category: "Women",
    subcategory: "Skirts",
    gender: "Women",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800",
    ],
    colors: [
      {
        name: "Navy",
        hex: "#001f3f",
        imageUrl:
          "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800",
      },
      {
        name: "Olive",
        hex: "#808000",
        imageUrl:
          "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800",
      },
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Flowing pleated midi skirt. Elegant movement with every step.",
    rating: 4.6,
    reviewsCount: 198,
    inStock: true,
  },

  // Women's Pants & Shirts
  {
    id: "w009",
    name: "High-Waisted Wide Leg Pants",
    brand: "SNAPPBUY STUDIO",
    price: 149,
    category: "Women",
    subcategory: "Pants",
    gender: "Women",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
      "https://images.unsplash.com/photo-1624206112431-672e3e7b6cbc?w=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
      },
      {
        name: "Cream",
        hex: "#F5F5DC",
        imageUrl:
          "https://images.unsplash.com/photo-1624206112431-672e3e7b6cbc?w=800",
      },
    ],
    sizes: ["24", "26", "28", "30", "32"],
    description:
      "Elegant wide-leg trousers with a flattering high waist. Perfect for work or evening.",
    rating: 4.7,
    reviewsCount: 178,
    inStock: true,
  },
  {
    id: "w010",
    name: "Satin Blouse",
    brand: "SNAPPBUY ATELIER",
    price: 129,
    originalPrice: 169,
    category: "Women",
    subcategory: "Shirts",
    gender: "Women",
    images: [
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=800",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800",
    ],
    colors: [
      {
        name: "Ivory",
        hex: "#FFFFF0",
        imageUrl:
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=800",
      },
      {
        name: "Burgundy",
        hex: "#800020",
        imageUrl:
          "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800",
      },
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Luxurious satin blouse with French cuffs. Sophisticated and versatile.",
    rating: 4.5,
    reviewsCount: 156,
    inStock: true,
  },

  // Men's Sweaters & Hoodies
  {
    id: "m001",
    name: "Wool Crew Neck Sweater",
    brand: "SNAPPBUY ESSENTIALS",
    price: 139,
    originalPrice: 179,
    category: "Men",
    subcategory: "Sweaters",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800",
    ],
    colors: [
      {
        name: "Navy",
        hex: "#001f3f",
        imageUrl:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
      },
      {
        name: "Charcoal",
        hex: "#36454F",
        imageUrl:
          "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Classic crew neck sweater in premium merino wool. Essential layering piece.",
    rating: 4.7,
    reviewsCount: 345,
    inStock: true,
  },
  {
    id: "m002",
    name: "Cashmere Hoodie",
    brand: "SNAPPBUY ESSENTIALS",
    price: 299,
    category: "Men",
    subcategory: "Sweaters",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800",
    ],
    colors: [
      {
        name: "Grey",
        hex: "#808080",
        imageUrl:
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
      },
      {
        name: "Navy",
        hex: "#001f3f",
        imageUrl:
          "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Luxury cashmere hoodie for elevated comfort. Sophisticated loungewear.",
    rating: 4.9,
    reviewsCount: 178,
    isNew: true,
    inStock: true,
  },

  // Men's Jackets & Coats
  {
    id: "m003",
    name: "Down Puffer Jacket",
    brand: "SNAPPBUY STUDIO",
    price: 399,
    originalPrice: 499,
    category: "Men",
    subcategory: "Jackets",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1548126032-079446e14e27?w=800",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1548126032-079446e14e27?w=800",
      },
      {
        name: "Olive",
        hex: "#808000",
        imageUrl:
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Warm down-filled puffer with water-resistant shell. Winter essential.",
    rating: 4.8,
    reviewsCount: 267,
    inStock: true,
  },
  {
    id: "m004",
    name: "Wool Overcoat",
    brand: "SNAPPBUY STUDIO",
    price: 749,
    originalPrice: 999,
    category: "Men",
    subcategory: "Jackets",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800",
      "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=800",
    ],
    colors: [
      {
        name: "Charcoal",
        hex: "#36454F",
        imageUrl:
          "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800",
      },
      {
        name: "Camel",
        hex: "#C19A6B",
        imageUrl:
          "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=800",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Single-breasted wool overcoat. Timeless elegance for cold weather.",
    rating: 4.9,
    reviewsCount: 145,
    inStock: true,
  },
  {
    id: "m005",
    name: "Quilted Gilet",
    brand: "SNAPPBUY STUDIO",
    price: 199,
    category: "Men",
    subcategory: "Jackets",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=800",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800",
    ],
    colors: [
      {
        name: "Navy",
        hex: "#001f3f",
        imageUrl:
          "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=800",
      },
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Lightweight quilted vest for layering. Versatile and practical.",
    rating: 4.5,
    reviewsCount: 198,
    inStock: true,
  },

  // Men's Shirts & Pants
  {
    id: "m006",
    name: "Linen Overshirt",
    brand: "SNAPPBUY ESSENTIALS",
    price: 129,
    category: "Men",
    subcategory: "Shirts",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
      "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800",
    ],
    colors: [
      {
        name: "Stone",
        hex: "#D3C5B5",
        imageUrl:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
      },
      {
        name: "Olive",
        hex: "#808000",
        imageUrl:
          "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Relaxed-fit linen overshirt. Perfect for layering in any season.",
    rating: 4.6,
    reviewsCount: 198,
    inStock: true,
  },
  {
    id: "m007",
    name: "Oxford Cotton Shirt",
    brand: "SNAPPBUY ESSENTIALS",
    price: 99,
    category: "Men",
    subcategory: "Shirts",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
    ],
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        imageUrl:
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
      },
      {
        name: "Light Blue",
        hex: "#ADD8E6",
        imageUrl:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Timeless button-down oxford shirt. Crisp, clean, classic.",
    rating: 4.5,
    reviewsCount: 423,
    inStock: true,
  },
  {
    id: "m008",
    name: "Merino Wool Polo",
    brand: "SNAPPBUY ESSENTIALS",
    price: 119,
    originalPrice: 159,
    category: "Men",
    subcategory: "Shirts",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800",
      "https://images.unsplash.com/photo-1594224947320-c4b7f3a7c1f9?w=800",
    ],
    colors: [
      {
        name: "Navy",
        hex: "#001f3f",
        imageUrl:
          "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800",
      },
      {
        name: "Burgundy",
        hex: "#800020",
        imageUrl:
          "https://images.unsplash.com/photo-1594224947320-c4b7f3a7c1f9?w=800",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Fine gauge merino polo shirt. Smart-casual perfection.",
    rating: 4.6,
    reviewsCount: 234,
    inStock: true,
  },
  {
    id: "m009",
    name: "Premium Denim Jeans",
    brand: "SNAPPBUY DENIM",
    price: 179,
    originalPrice: 229,
    category: "Men",
    subcategory: "Pants",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800",
    ],
    colors: [
      {
        name: "Dark Indigo",
        hex: "#1F3A5F",
        imageUrl:
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
      },
      {
        name: "Light Wash",
        hex: "#A4B8C4",
        imageUrl:
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800",
      },
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description:
      "Japanese selvedge denim with a modern slim fit. Comfort stretch technology.",
    rating: 4.7,
    reviewsCount: 512,
    isNew: true,
    inStock: true,
  },
  {
    id: "m010",
    name: "Chino Trousers",
    brand: "SNAPPBUY ESSENTIALS",
    price: 119,
    originalPrice: 149,
    category: "Men",
    subcategory: "Pants",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
      "https://images.unsplash.com/photo-1624378440070-7b44e636d770?w=800",
    ],
    colors: [
      {
        name: "Khaki",
        hex: "#C3B091",
        imageUrl:
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
      },
      {
        name: "Navy",
        hex: "#001f3f",
        imageUrl:
          "https://images.unsplash.com/photo-1624378440070-7b44e636d770?w=800",
      },
    ],
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    description:
      "Versatile cotton chinos with a modern slim fit. Effortless style.",
    rating: 4.6,
    reviewsCount: 289,
    inStock: true,
  },

  // Shoes Collection
  {
    id: "s001",
    name: "Leather Chelsea Boots",
    brand: "SNAPPBUY FOOTWEAR",
    price: 399,
    originalPrice: 499,
    category: "Shoes",
    subcategory: "Boots",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800",
      },
      {
        name: "Brown",
        hex: "#654321",
        imageUrl:
          "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800",
      },
    ],
    sizes: ["6", "7", "8", "9", "10", "11"],
    description:
      "Handcrafted full-grain leather Chelsea boots. Goodyear welted for durability.",
    rating: 4.8,
    reviewsCount: 421,
    inStock: true,
  },
  {
    id: "s002",
    name: "Suede Loafers",
    brand: "SNAPPBUY FOOTWEAR",
    price: 279,
    originalPrice: 349,
    category: "Shoes",
    subcategory: "Dress Shoes",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800",
      "https://images.unsplash.com/photo-1582897237119-42a26e87f499?w=800",
    ],
    colors: [
      {
        name: "Navy",
        hex: "#001f3f",
        imageUrl:
          "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800",
      },
      {
        name: "Tan",
        hex: "#D2B48C",
        imageUrl:
          "https://images.unsplash.com/photo-1582897237119-42a26e87f499?w=800",
      },
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description:
      "Classic penny loafers in premium suede. Effortless sophistication.",
    rating: 4.7,
    reviewsCount: 289,
    inStock: true,
  },
  {
    id: "s003",
    name: "White Leather Sneakers",
    brand: "SNAPPBUY FOOTWEAR",
    price: 189,
    category: "Shoes",
    subcategory: "Sneakers",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800",
    ],
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        imageUrl:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      },
      {
        name: "White/Navy",
        hex: "#F5F5F5",
        imageUrl:
          "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800",
      },
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description:
      "Minimalist low-top sneakers in premium leather. Modern classic.",
    rating: 4.8,
    reviewsCount: 567,
    isNew: true,
    inStock: true,
  },
  {
    id: "s004",
    name: "Desert Boots",
    brand: "SNAPPBUY FOOTWEAR",
    price: 229,
    originalPrice: 279,
    category: "Shoes",
    subcategory: "Boots",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=800",
      "https://images.unsplash.com/photo-1582897237119-42a26e87f499?w=800",
    ],
    colors: [
      {
        name: "Sand",
        hex: "#C2B280",
        imageUrl:
          "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=800",
      },
      {
        name: "Brown",
        hex: "#654321",
        imageUrl:
          "https://images.unsplash.com/photo-1582897237119-42a26e87f499?w=800",
      },
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Iconic desert boots in soft suede. Timeless casual style.",
    rating: 4.6,
    reviewsCount: 345,
    inStock: true,
  },
  {
    id: "s005",
    name: "Oxford Dress Shoes",
    brand: "SNAPPBUY FOOTWEAR",
    price: 349,
    category: "Shoes",
    subcategory: "Dress Shoes",
    gender: "Men",
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800",
      },
      {
        name: "Brown",
        hex: "#654321",
        imageUrl:
          "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800",
      },
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Cap-toe oxford shoes in polished leather. Formal elegance.",
    rating: 4.9,
    reviewsCount: 234,
    inStock: true,
  },
  {
    id: "s006",
    name: "Running Sneakers",
    brand: "SNAPPBUY ACTIVE",
    price: 159,
    originalPrice: 199,
    category: "Shoes",
    subcategory: "Sneakers",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800",
    ],
    colors: [
      {
        name: "Black/White",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      },
      {
        name: "Grey/Blue",
        hex: "#808080",
        imageUrl:
          "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800",
      },
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description:
      "Performance running shoes with cushioned support. Built for comfort.",
    rating: 4.7,
    reviewsCount: 412,
    inStock: true,
  },
  {
    id: "s007",
    name: "Ankle Boots",
    brand: "SNAPPBUY FOOTWEAR",
    price: 329,
    category: "Shoes",
    subcategory: "Boots",
    gender: "Women",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800",
      },
      {
        name: "Tan",
        hex: "#D2B48C",
        imageUrl:
          "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800",
      },
    ],
    sizes: ["5", "6", "7", "8", "9", "10"],
    description:
      "Versatile leather ankle boots. Sleek silhouette for any occasion.",
    rating: 4.6,
    reviewsCount: 298,
    inStock: true,
  },
  {
    id: "s008",
    name: "Canvas Slip-Ons",
    brand: "SNAPPBUY FOOTWEAR",
    price: 89,
    originalPrice: 119,
    category: "Shoes",
    subcategory: "Sneakers",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800",
      "https://images.unsplash.com/photo-1560769680-ba4b81b80a5e?w=800",
    ],
    colors: [
      {
        name: "Navy",
        hex: "#001f3f",
        imageUrl:
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800",
      },
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1560769680-ba4b81b80a5e?w=800",
      },
    ],
    sizes: ["6", "7", "8", "9", "10", "11"],
    description:
      "Easy-on canvas slip-ons for laid-back style. Summer essential.",
    rating: 4.4,
    reviewsCount: 523,
    inStock: true,
  },

  // Accessories Collection
  {
    id: "a001",
    name: "Leather Belt",
    brand: "SNAPPBUY ACCESSORIES",
    price: 89,
    category: "Accessories",
    subcategory: "Belts",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583d2?w=800",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1624222247344-550fb60583d2?w=800",
      },
      {
        name: "Brown",
        hex: "#654321",
        imageUrl:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
      },
    ],
    sizes: ["30", "32", "34", "36", "38", "40"],
    description:
      "Classic full-grain leather belt with brushed buckle. Timeless accessory.",
    rating: 4.7,
    reviewsCount: 456,
    inStock: true,
  },
  {
    id: "a002",
    name: "Cashmere Scarf",
    brand: "SNAPPBUY ACCESSORIES",
    price: 129,
    originalPrice: 169,
    category: "Accessories",
    subcategory: "Scarves",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800",
    ],
    colors: [
      {
        name: "Camel",
        hex: "#C19A6B",
        imageUrl:
          "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800",
      },
      {
        name: "Grey",
        hex: "#808080",
        imageUrl:
          "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800",
      },
    ],
    sizes: ["One Size"],
    description:
      "Luxuriously soft cashmere scarf. Essential cold-weather layering.",
    rating: 4.8,
    reviewsCount: 234,
    inStock: true,
  },
  {
    id: "a003",
    name: "Leather Wallet",
    brand: "SNAPPBUY ACCESSORIES",
    price: 119,
    category: "Accessories",
    subcategory: "Wallets",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
      },
      {
        name: "Tan",
        hex: "#D2B48C",
        imageUrl:
          "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800",
      },
    ],
    sizes: ["One Size"],
    description: "Bi-fold wallet in premium leather. RFID protection included.",
    rating: 4.6,
    reviewsCount: 378,
    inStock: true,
  },
  {
    id: "a004",
    name: "Sunglasses",
    brand: "SNAPPBUY EYEWEAR",
    price: 199,
    originalPrice: 249,
    category: "Accessories",
    subcategory: "Eyewear",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
      },
      {
        name: "Tortoise",
        hex: "#8B4513",
        imageUrl:
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
      },
    ],
    sizes: ["One Size"],
    description:
      "Classic aviator sunglasses with UV protection. Timeless cool.",
    rating: 4.7,
    reviewsCount: 289,
    inStock: true,
  },
  {
    id: "a005",
    name: "Leather Gloves",
    brand: "SNAPPBUY ACCESSORIES",
    price: 149,
    category: "Accessories",
    subcategory: "Gloves",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
    ],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800",
      },
      {
        name: "Brown",
        hex: "#654321",
        imageUrl:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Cashmere-lined leather gloves. Elegant warmth for winter.",
    rating: 4.8,
    reviewsCount: 156,
    inStock: true,
  },
  {
    id: "a006",
    name: "Canvas Tote Bag",
    brand: "SNAPPBUY ACCESSORIES",
    price: 79,
    originalPrice: 99,
    category: "Accessories",
    subcategory: "Bags",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    ],
    colors: [
      {
        name: "Natural",
        hex: "#F5F5DC",
        imageUrl:
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
      },
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
      },
    ],
    sizes: ["One Size"],
    description:
      "Durable canvas tote with leather handles. Everyday versatility.",
    rating: 4.5,
    reviewsCount: 512,
    inStock: true,
  },
  {
    id: "a007",
    name: "Wool Beanie",
    brand: "SNAPPBUY ACCESSORIES",
    price: 59,
    category: "Accessories",
    subcategory: "Hats",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800",
      "https://images.unsplash.com/photo-1543857182-68620f4d1e4f?w=800",
    ],
    colors: [
      {
        name: "Navy",
        hex: "#001f3f",
        imageUrl:
          "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800",
      },
      {
        name: "Grey",
        hex: "#808080",
        imageUrl:
          "https://images.unsplash.com/photo-1543857182-68620f4d1e4f?w=800",
      },
    ],
    sizes: ["One Size"],
    description: "Classic ribbed wool beanie. Cozy winter essential.",
    rating: 4.6,
    reviewsCount: 423,
    inStock: true,
  },
  {
    id: "a008",
    name: "Leather Backpack",
    brand: "SNAPPBUY ACCESSORIES",
    price: 399,
    originalPrice: 499,
    category: "Accessories",
    subcategory: "Bags",
    gender: "Unisex",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=800",
    ],
    colors: [
      {
        name: "Brown",
        hex: "#654321",
        imageUrl:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
      },
      {
        name: "Black",
        hex: "#000000",
        imageUrl:
          "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=800",
      },
    ],
    sizes: ["One Size"],
    description:
      "Full-grain leather backpack with laptop compartment. Form meets function.",
    rating: 4.9,
    reviewsCount: 198,
    isNew: true,
    inStock: true,
  },
];

export const CATEGORIES = ["All", "Women", "Men", "Shoes", "Accessories"];

export const SUBCATEGORIES = {
  Women: ["All", "Sweaters", "Jackets", "Dresses", "Skirts", "Pants", "Shirts"],
  Men: ["All", "Sweaters", "Jackets", "Shirts", "Pants"],
  Shoes: ["All", "Boots", "Sneakers", "Dress Shoes"],
  Accessories: [
    "All",
    "Belts",
    "Scarves",
    "Wallets",
    "Eyewear",
    "Gloves",
    "Bags",
    "Hats",
  ],
};

export const BRANDS = [
  "All Brands",
  "SNAPPBUY ESSENTIALS",
  "SNAPPBUY STUDIO",
  "SNAPPBUY ATELIER",
  "SNAPPBUY FOOTWEAR",
  "SNAPPBUY DENIM",
  "SNAPPBUY ACTIVE",
  "SNAPPBUY ACCESSORIES",
  "SNAPPBUY EYEWEAR",
];

export const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $400", min: 200, max: 400 },
  { label: "$400+", min: 400, max: Infinity },
];
